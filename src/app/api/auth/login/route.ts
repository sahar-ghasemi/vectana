import { NextResponse } from "next/server";
import { authService } from "@/services/auth";

export async function POST(request: Request) {
  try {
    const { mobile, otp } = await request.json();

    if (!mobile) {
      return NextResponse.json(
        { error: "شماره موبایل الزامی است" },
        { status: 400 }
      );
    }

    if (!otp) {
      await authService.generateOTP(mobile);
      return NextResponse.json({ message: "کد تایید ارسال شد" });
    }

    // تایید کد و ورود
    console.log("[LOGIN API] JWT_SECRET:", process.env.JWT_SECRET);
    const result = await authService.verifyOTP(mobile, otp);
    if (!result.token) {
      throw new Error("توکن ایجاد نشد");
    }

    // 🔧 استفاده از new NextResponse به‌جای json
    const response = new NextResponse(
      JSON.stringify({ message: "ورود موفقیت‌آمیز", success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    response.cookies.set({
      name: "token",
      value: result.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "خطا در ورود به سیستم",
      },
      { status: 500 }
    );
  }
}
