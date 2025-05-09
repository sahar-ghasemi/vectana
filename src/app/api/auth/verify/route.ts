import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "توکن یافت نشد" }, { status: 401 });
    }

    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key");
    return NextResponse.json({ user: decoded });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "توکن نامعتبر است" }, { status: 401 });
  }
}
