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
    const storedOTP = await redis.get(`otp:${mobile}`);
    if (!storedOTP) {
      return NextResponse.json(
        { error: "کد تایید منقضی شده است. لطفاً کد جدید درخواست کنید." },
        { status: 400 }
      );
    }

    // Increment attempts
    await redis.incr(attemptsKey);

    // Verify OTP
    if (otp !== storedOTP) {
      return NextResponse.json(
        { error: "کد تایید اشتباه است" },
        { status: 400 }
      );
    }

    // Clear OTP and attempts after successful verification
    await redis.del(`otp:${mobile}`, attemptsKey);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "خطا در تایید کد" }, { status: 500 });
  }
}
