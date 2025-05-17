import { NextResponse } from "next/server";
import Redis from "ioredis";
import { MAX_OTP_ATTEMPTS } from "@/lib/constants";

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,
});

export async function POST(req: Request) {
  try {
    const { mobile, otp } = await req.json();

    console.log("[VERIFY-OTP] Starting verification for mobile:", mobile);

    // Validate mobile format
    if (!/^09[0-9]{9}$/.test(mobile)) {
      return NextResponse.json(
        { error: "فرمت شماره موبایل نامعتبر است" },
        { status: 400 }
      );
    }

    // Check attempts
    const attemptsKey = `otp_attempts:${mobile}`;
    const attempts = await redis.get(attemptsKey);

    if (attempts && parseInt(attempts) >= MAX_OTP_ATTEMPTS) {
      return NextResponse.json(
        {
          error:
            "تعداد تلاش‌های شما بیش از حد مجاز است. لطفاً کد جدید درخواست کنید.",
        },
        { status: 400 }
      );
    }

    // Get stored OTP
    const otpKey = `otp:${mobile}`;
    console.log("[VERIFY-OTP] Checking Redis key:", otpKey);

    const exists = await redis.exists(otpKey);
    console.log("[VERIFY-OTP] Key exists:", exists);

    if (!exists) {
      console.log("[VERIFY-OTP] No OTP found for mobile:", mobile);
      return NextResponse.json(
        { error: "کد تایید منقضی شده است. لطفاً کد جدید درخواست کنید." },
        { status: 400 }
      );
    }

    const storedOTP = await redis.get(otpKey);
    console.log("[VERIFY-OTP] Stored OTP:", storedOTP, "Input OTP:", otp);
    console.log("[VERIFY-OTP] Current attempts:", attempts);

    // Increment attempts
    await redis.incr(attemptsKey);

    // Verify OTP
    if (otp !== storedOTP) {
      return NextResponse.json(
        { error: "کد تایید اشتباه است" },
        { status: 400 }
      );
    }

    // Clear attempts after successful verification
    await redis.del(attemptsKey);
    console.log("[VERIFY-OTP] OTP verified successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[VERIFY-OTP] Error verifying OTP:", error);
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "خطا در تایید کد" }, { status: 500 });
  }
}
