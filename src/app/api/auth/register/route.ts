import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateReferralCode } from "@/services/user";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[REGISTER] Incoming body:", body);
    const { name, lastName, mobile, email, referralCode } = body;

    // Validate required fields
    if (!name || !mobile || !email) {
      console.log("[REGISTER] Missing required fields", {
        name,
        mobile,
        email,
      });
      return NextResponse.json(
        { error: "نام، موبایل و ایمیل الزامی هستند" },
        { status: 400 }
      );
    }

    // Validate mobile format
    if (!/^09[0-9]{9}$/.test(mobile)) {
      console.log("[REGISTER] Invalid mobile format:", mobile);
      return NextResponse.json(
        { error: "فرمت شماره موبایل نامعتبر است" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("[REGISTER] Invalid email format:", email);
      return NextResponse.json(
        { error: "فرمت ایمیل نامعتبر است" },
        { status: 400 }
      );
    }

    // Check if mobile is already registered
    const existingUser = await prisma.user.findFirst({
      where: { mobile },
    });
    console.log("[REGISTER] Existing user by mobile:", existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "این شماره موبایل قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    // Check if email is already registered
    const existingEmail = await prisma.user.findFirst({
      where: { email },
    });
    console.log("[REGISTER] Existing user by email:", existingEmail);

    if (existingEmail) {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    // Generate unique referral code
    const userReferralCode = generateReferralCode();
    console.log("[REGISTER] Generated referral code:", userReferralCode);

    // Create new user
    let newUser;
    let referrerId: string | null = null;
    if (referralCode) {
      const referrer = await prisma.user.findFirst({
        where: { referralCode },
      });
      console.log("[REGISTER] Referrer found:", referrer);
      if (referrer) {
        referrerId = referrer.id;
      }
    }
    try {
      newUser = await prisma.user.create({
        data: {
          firstName: name,
          lastName: lastName || null,
          mobile,
          email,
          referralCode: userReferralCode,
          remainingFreeRequest: 0,
          role: "USER",
          signupDate: new Date(),
          lastLogin: new Date(),
          loginCount: 0,
          referredByUser: referrerId,
        },
      });
      console.log("[REGISTER] New user created:", newUser);
    } catch (err) {
      console.error("[REGISTER] Error creating user:", err);
      throw err;
    }

    // Handle referral if provided
    if (referralCode) {
      const referrer = await prisma.user.findFirst({
        where: { referralCode },
      });
      console.log("[REGISTER] Referrer found:", referrer);

      if (referrer) {
        try {
          await prisma.user.update({
            where: { id: referrer.id },
            data: {
              remainingFreeRequest: {
                increment: 2,
              },
            },
          });
          await prisma.referralTracking.create({
            data: {
              referrerId: referrer.id,
              referredId: newUser.id,
              rewardCount: 2,
            },
          });
          console.log("[REGISTER] Referral tracking created");
        } catch (err) {
          console.error("[REGISTER] Error handling referral:", err);
        }
      } else {
        console.log("[REGISTER] No referrer found for code:", referralCode);
      }
    }

    // Generate JWT token
    let token;
    try {
      token = sign(
        {
          userId: newUser.id,
          mobile: newUser.mobile,
        },
        JWT_SECRET,
        { expiresIn: "1d" }
      );
      console.log("[REGISTER] JWT token generated");
    } catch (err) {
      console.error("[REGISTER] Error generating JWT:", err);
      throw err;
    }

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        mobile: newUser.mobile,
        referralCode: newUser.referralCode,
        remainingFreeRequest: newUser.remainingFreeRequest,
      },
    });
  } catch (error) {
    console.error("[REGISTER] Registration error:", error);
    return NextResponse.json({ error: "خطا در ثبت نام" }, { status: 500 });
  }
}
