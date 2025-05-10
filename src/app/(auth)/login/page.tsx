"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useAuthStore } from "@/stores/useAuthStore";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedMobile = localStorage.getItem("loginMobile");
    const savedOtpSent = localStorage.getItem("otpSent");
    const savedExpiryTime = localStorage.getItem("otpExpiryTime");

    if (savedMobile) {
      setMobile(savedMobile);
    }

    if (savedOtpSent === "true" && savedExpiryTime) {
      const expiryTime = parseInt(savedExpiryTime);
      const now = Date.now();
      const remainingTime = Math.max(0, Math.floor((expiryTime - now) / 1000));

      if (remainingTime > 0) {
        setShowOtpInput(true);
        setCountdown(remainingTime);
        setCanResend(false);
      } else {
        resetForm();
      }
    }
  }, []);

  const resetForm = () => {
    localStorage.removeItem("loginMobile");
    localStorage.removeItem("otpSent");
    localStorage.removeItem("otpExpiryTime");
    setShowOtpInput(false);
    setOtp("");
    setCountdown(0);
    setCanResend(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showOtpInput && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            localStorage.removeItem("otpSent");
            localStorage.removeItem("otpExpiryTime");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showOtpInput, countdown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const checkResponse = await fetch("/api/auth/check-mobile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });

      const checkData = await checkResponse.json();

      if (!checkResponse.ok) {
        throw new Error(checkData.error || "خطا در بررسی شماره موبایل");
      }

      if (!checkData.exists) {
        toast.error("این شماره موبایل ثبت نشده است. لطفا ابتدا ثبت‌نام کنید.", {
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

      console.log("Sending mobile number:", mobile);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
        credentials: "include",
      });

      const data = await response.json();
      console.log("Response:", data);

      if (!response.ok) {
        if (data.error?.includes("تعداد درخواست‌های شما بیش از حد مجاز است")) {
          resetForm();
          toast.error(data.error, {
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
        throw new Error(data.error || "خطا در ارسال کد تایید");
      }

      const expiryTime = Date.now() + 120 * 1000;
      localStorage.setItem("otpExpiryTime", expiryTime.toString());
      localStorage.setItem("otpSent", "true");

      setShowOtpInput(true);
      setCountdown(120);
      setCanResend(false);
      toast.success("کد تایید ارسال شد");
    } catch (error) {
      console.error("Error sending mobile:", error);
      toast.error(
        error instanceof Error ? error.message : "خطا در ارسال کد تایید"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "خطا در ورود به سیستم");
      }

      if (data.success) {
        // ست کردن وضعیت لاگین در Zustand
        setLoggedIn(true);
        setUser({ id: data.userId || "", mobile });
        // افزایش تاخیر برای اطمینان از ذخیره کوکی
        await new Promise((resolve) => setTimeout(resolve, 3000));
        window.location.replace("/dashboard");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "خطا در ورود به سیستم");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    const event = new Event("submit") as unknown as React.FormEvent;
    await handleMobileSubmit(event);
  };

  // نمایش خطا در UI
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          ورود به حساب کاربری
        </h2>

        {!showOtpInput ? (
          <form onSubmit={handleMobileSubmit} className="space-y-5">
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
              className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500
               hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 
               shadow-md hover:shadow-lg hover:cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "در حال ارسال..." : "دریافت کد تایید"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
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
              {countdown > 0 ? (
                <p>زمان باقی‌مانده: {formatTime(countdown)}</p>
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
              className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500
               hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 
               shadow-md hover:shadow-lg hover:cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "در حال بررسی..." : "ورود"}
            </button>
          </form>
        )}

        <p className="text-center text-gray-600 mt-4">
          حساب کاربری ندارید؟{" "}
          <Link href="/signup" className="text-purple-600 hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}
