import { PrismaClient } from "@prisma/client";
import { Redis } from "ioredis";
import { sign, verify } from "jsonwebtoken";

const prisma = new PrismaClient();

// Redis configuration with better error handling
const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

const OTP_EXPIRY = 120; // 2 minutes in seconds
const MAX_OTP_ATTEMPTS = 3;
const OTP_REQUEST_LIMIT = 10; // افزایش به 10 درخواست در ساعت برای تست
const OTP_REQUEST_WINDOW = 3600; // 1 hour in seconds

// این مقدار باید در فایل .env قرار بگیره
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";

export const authService = {
  async checkMobile(mobile: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          mobile: mobile,
        },
      });
      return { exists: !!user };
    } catch (error) {
      console.error("Error checking mobile:", error);
      throw new Error("خطا در بررسی شماره موبایل");
    }
  },

  async generateOTP(mobile: string) {
    try {
      // بررسی محدودیت درخواست
      const requestKey = `otp_request:${mobile}`;
      const requestCount = await redis.get(requestKey);

      if (requestCount && parseInt(requestCount) >= OTP_REQUEST_LIMIT) {
        throw new Error(
          "تعداد درخواست‌های شما بیش از حد مجاز است. لطفا بعد از یک ساعت مجددا تلاش کنید."
        );
      }

      // بررسی زمان درخواست قبلی
      const lastRequestKey = `otp_last_request:${mobile}`;
      const lastRequestTime = await redis.get(lastRequestKey);

      if (lastRequestTime) {
        const timeDiff = Date.now() - parseInt(lastRequestTime);
        if (timeDiff < OTP_EXPIRY * 1000) {
          throw new Error(
            `لطفا ${Math.ceil(
              (OTP_EXPIRY * 1000 - timeDiff) / 1000
            )} ثانیه دیگر مجددا تلاش کنید.`
          );
        }
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpKey = `otp:${mobile}`;

      // ذخیره OTP در Redis با زمان انقضا
      await redis.set(otpKey, otp, "EX", OTP_EXPIRY);

      // ذخیره زمان درخواست
      await redis.set(
        lastRequestKey,
        Date.now().toString(),
        "EX",
        OTP_REQUEST_WINDOW
      );

      // افزایش تعداد درخواست‌ها
      await redis.incr(requestKey);
      await redis.expire(requestKey, OTP_REQUEST_WINDOW);

      // نمایش OTP در کنسول با فرمت بهتر
      console.log("\n");
      console.log(
        "╔════════════════════════════════════════════════════════════╗"
      );
      console.log(
        "║                     کد تایید برای محیط توسعه                ║"
      );
      console.log(
        "╠════════════════════════════════════════════════════════════╣"
      );
      console.log(`║ 📱 شماره موبایل: ${mobile.padEnd(40)} ║`);
      console.log(`║ 🔑 کد تایید: ${otp.padEnd(45)} ║`);
      console.log(
        "╚════════════════════════════════════════════════════════════╝"
      );
      console.log("\n");

      return true;
    } catch (error) {
      console.error("Error generating OTP:", error);
      throw error;
    }
  },

  async verifyOTP(mobile: string, otp: string) {
    try {
      const otpKey = `otp:${mobile}`;
      const attemptsKey = `otp_attempts:${mobile}`;

      // بررسی تعداد تلاش‌ها
      const attempts = await redis.get(attemptsKey);
      if (attempts && parseInt(attempts) >= MAX_OTP_ATTEMPTS) {
        throw new Error(
          "تعداد تلاش‌های شما بیش از حد مجاز است. لطفا کد جدید درخواست کنید."
        );
      }

      // دریافت OTP ذخیره شده
      const storedOTP = await redis.get(otpKey);
      if (!storedOTP) {
        throw new Error("کد تایید منقضی شده است. لطفا کد جدید درخواست کنید.");
      }

      // افزایش تعداد تلاش‌ها
      await redis.incr(attemptsKey);

      if (otp !== storedOTP) {
        throw new Error("کد تایید اشتباه است.");
      }

      // پاک کردن OTP و تلاش‌ها پس از تایید موفق
      await redis.del(otpKey, attemptsKey);

      // تولید توکن دسترسی
      const user = await prisma.user.findUnique({
        where: { mobile },
      });

      if (!user) {
        throw new Error("کاربر یافت نشد");
      }

      const token = sign(
        {
          userId: user.id,
          mobile: user.mobile,
          role: user.role,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );

      // به‌روزرسانی اطلاعات ورود کاربر
      await prisma.user.update({
        where: { id: user.id },
        data: {
          loginCount: { increment: 1 },
          lastLogin: new Date(),
        },
      });

      return { token, user };
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  },

  async login(mobile: string, deviceInfo?: string, ipAddress?: string) {
    try {
      const user = await prisma.user.update({
        where: {
          mobile: mobile,
        },
        data: {
          loginCount: {
            increment: 1,
          },
          lastLogin: new Date(),
        },
      });

      // تولید توکن‌ها
      const accessToken = sign(
        {
          userId: user.id,
          mobile: user.mobile,
          role: user.role,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );

      const refreshToken = sign({ userId: user.id }, JWT_REFRESH_SECRET, {
        expiresIn: "7d",
      });

      // ذخیره توکن‌ها در دیتابیس
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

      const session = await prisma.userSession.create({
        data: {
          userId: user.id,
          accessToken,
          refreshToken,
          deviceInfo,
          ipAddress,
          expiresAt,
        },
      });

      return {
        user,
        accessToken,
        refreshToken,
        sessionId: session.id,
      };
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("خطا در ورود به سیستم");
    }
  },

  async verifyToken(token: string) {
    try {
      const decoded = verify(token, JWT_SECRET);

      // بررسی وجود توکن در دیتابیس
      const session = await prisma.userSession.findFirst({
        where: {
          accessToken: token,
          isActive: true,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (!session) {
        throw new Error("توکن نامعتبر یا منقضی شده است");
      }

      return decoded;
    } catch (error) {
      console.error("Token verification error:", error);
      throw new Error("توکن نامعتبر است");
    }
  },

  async refreshToken(refreshToken: string) {
    try {
      verify(refreshToken, JWT_REFRESH_SECRET);

      // بررسی وجود توکن در دیتابیس
      const session = await prisma.userSession.findFirst({
        where: {
          refreshToken,
          isActive: true,
          expiresAt: {
            gt: new Date(),
          },
        },
        include: {
          user: true,
        },
      });

      if (!session) {
        throw new Error("توکن نامعتبر یا منقضی شده است");
      }

      // تولید توکن جدید
      const newAccessToken = sign(
        {
          userId: session.user.id,
          mobile: session.user.mobile,
          role: session.user.role,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );

      // به‌روزرسانی توکن در دیتابیس
      await prisma.userSession.update({
        where: { id: session.id },
        data: { accessToken: newAccessToken },
      });

      return { accessToken: newAccessToken };
    } catch (error) {
      console.error("Token refresh error:", error);
      throw new Error("خطا در تمدید توکن");
    }
  },

  async logout(sessionId: string) {
    try {
      await prisma.userSession.update({
        where: { id: sessionId },
        data: { isActive: false },
      });
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error("خطا در خروج از سیستم");
    }
  },

  async logoutAll(userId: string) {
    try {
      await prisma.userSession.updateMany({
        where: {
          userId,
          isActive: true,
        },
        data: { isActive: false },
      });
      return true;
    } catch (error) {
      console.error("Logout all error:", error);
      throw new Error("خطا در خروج از تمام دستگاه‌ها");
    }
  },
};
