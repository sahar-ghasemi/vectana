import { NextRequest, NextResponse } from "next/server";
import { getRemainingRequestByMobile } from "@/lib/services/userSubscription/getRemainingRequests";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mobile = searchParams.get("mobile");

    if (!mobile) {
      return NextResponse.json(
        { error: "Mobile number is required" },
        { status: 400 }
      );
    }

    const remainingRequests = await getRemainingRequestByMobile(mobile);
    return NextResponse.json({ remainingRequests }, { status: 200 });
  } catch (error) {
    console.error("Error in remaining-request API:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
