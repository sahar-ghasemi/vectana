import { NextResponse } from "next/server";
import { authService } from "@/services/auth";

export async function POST(request: Request) {
  try {
    const { mobile } = await request.json();

    if (!mobile) {
      return NextResponse.json(
        { error: "شماره موبایل الزامی است" },
        { status: 400 }
      );
    }

    const result = await authService.checkMobile(mobile);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error checking mobile:", error);
    return NextResponse.json(
      { error: "خطا در بررسی شماره موبایل" },
      { status: 500 }
    );
  }
}
