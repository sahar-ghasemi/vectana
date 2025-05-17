"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login"; // "login" or "register"
  const referralCode = searchParams.get("ref") || "";

  // Step management
  const [step, setStep] = useState(1); // 1: mobile, 2: otp, 3: info (for register only)
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpCountdown, setOtpCountdown] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Registration info
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // OTP timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 2 && otpCountdown > 0) {
      timer = setInterval(() => {
        setOtpCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, otpCountdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if mobile exists
      const checkResponse = await fetch("/api/auth/login/check-mobile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const checkData = await checkResponse.json();

      if (!checkResponse.ok) {
        throw new Error(checkData.error || "خطا در بررسی شماره موبایل");
      }

      // For login mode
      if (mode === "login") {
        if (!checkData.exists) {
          toast.error(
            "این شماره موبایل ثبت نشده است. لطفا ابتدا ثبت‌نام کنید.",
            {
              duration: 5000,
              position: "top-center",
              style: {
                background: "#FEE2E2",
                color: "#991B1B",
                padding: "16px",
                borderRadius: "8px",
              },
            }
          );
          return;
        }
      }
      // For register mode
      else {
        if (checkData.exists) {
          toast.error("این شماره موبایل قبلاً ثبت شده است. لطفا وارد شوید.", {
            duration: 5000,
            position: "top-center",
            style: {
              background: "#FEE2E2",
              color: "#991B1B",
              padding: "16px",
              borderRadius: "8px",
            },
          });
          return;
        }
      }

      // Send OTP
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, mode }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطا در ارسال کد تایید");

      setStep(2);
      setOtpCountdown(120);
      setCanResend(false);
      toast.success("کد تایید ارسال شد");
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطا در تایید کد");

      setIsOtpVerified(true);

      if (mode === "login") {
        // For login, proceed with authentication
        const signInRes = await signIn("credentials", {
          redirect: false,
          mobile,
          otp,
          callbackUrl: "/dashboard",
        });

        if (!signInRes?.ok) {
          throw new Error(signInRes?.error || "خطا در ورود به سیستم");
        }

        // Add delay to ensure cookie is saved
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.replace("/dashboard");
      } else {
        // For register, move to info step
        setStep(3);
        toast.success("کد تایید شد. لطفاً اطلاعات خود را وارد کنید.");
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Resend OTP
  const handleResendOtp = async () => {
    if (!canResend) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطا در ارسال مجدد کد");

      setOtpCountdown(120);
      setCanResend(false);
      toast.success("کد تایید مجدداً ارسال شد");
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          lastName,
          mobile,
          email,
          referralCode: referralCode || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطا در ثبت نام");

      // After successful registration, sign in the user
      const signInRes = await signIn("credentials", {
        redirect: false,
        mobile,
        otp,
        callbackUrl: "/dashboard",
      });

      if (!signInRes?.ok) {
        // If sign in fails, we'll still show success message and redirect
        // since registration was successful
        toast.success("ثبت‌نام با موفقیت انجام شد");
        // Add a small delay before redirect
        setTimeout(() => {
          router.replace("/dashboard");
        }, 1000);
      } else {
        toast.success("ثبت‌نام با موفقیت انجام شد");
        router.replace("/dashboard");
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {mode === "login" ? "ورود به حساب کاربری" : "ثبت‌نام در وکتانا"}
        </h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                شماره موبایل:
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="09xxxxxxxxx"
                required
                pattern="^09[0-9]{9}$"
                onChange={(e) => setMobile(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "در حال ارسال..." : "دریافت کد تایید"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                کد تایید:
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="کد 6 رقمی"
                required
                pattern="[0-9]{6}"
                maxLength={6}
                onChange={(e) => setOtp(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="text-center text-sm text-gray-600">
              {otpCountdown > 0 ? (
                <p>زمان باقی‌مانده: {formatTime(otpCountdown)}</p>
              ) : (
                <p>کد تایید منقضی شده است</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={!canResend || isLoading}
              className="w-full text-purple-600 hover:text-purple-700 font-medium py-2"
            >
              {isLoading ? "در حال ارسال..." : "ارسال مجدد کد"}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "در حال بررسی..." : "تایید کد"}
            </button>
          </form>
        )}

        {step === 3 && isOtpVerified && mode === "register" && (
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                نام:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="نام خود را وارد کنید"
                required
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                نام خانوادگی:
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="نام خانوادگی خود را وارد کنید"
                required
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ایمیل:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@email.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
