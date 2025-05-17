import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Redis from "ioredis";
import {
  OTP_EXPIRY,
  OTP_REQUEST_LIMIT,
  OTP_REQUEST_WINDOW,
} from "@/lib/constants";

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,
});

export async function POST(req: Request) {
  try {
    const { mobile, mode } = await req.json();

    // Validate mobile format
    if (!/^09[0-9]{9}$/.test(mobile)) {
      return NextResponse.json(
        { error: "فرمت شماره موبایل نامعتبر است" },
        { status: 400 }
      );
    }

    // Check if mobile is already registered
    const existingUser = await prisma.user.findFirst({
      where: { mobile },
    });

    // For register mode, check if mobile exists
    if (mode === "register" && existingUser) {
      return NextResponse.json(
        { error: "این شماره موبایل قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    // For login mode, check if mobile doesn't exist
    if (mode === "login" && !existingUser) {
      return NextResponse.json(
        { error: "این شماره موبایل ثبت نشده است" },
        { status: 400 }
      );
    }

    // Check request limit
    const requestKey = `otp_requests:${mobile}`;
    const requestCount = await redis.get(requestKey);

    if (requestCount && parseInt(requestCount) >= OTP_REQUEST_LIMIT) {
      return NextResponse.json(
        {
          error:
            "تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً یک ساعت دیگر تلاش کنید.",
        },
        { status: 429 }
      );
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in Redis
    await redis.set(`otp:${mobile}`, otp, "EX", OTP_EXPIRY);

    // Increment request count
    await redis.incr(requestKey);
    await redis.expire(requestKey, OTP_REQUEST_WINDOW);

    // TODO: Send OTP via SMS service
    console.log(`OTP for ${mobile}: ${otp}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "خطا در ارسال کد تایید" },
      { status: 500 }
    );
  }
}
