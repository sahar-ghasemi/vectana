"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    router.push("/dashboard");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br
     from-blue-100 to-purple-200"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
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
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              رمز عبور:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-purple-600" />
              <span className="text-gray-600">مرا به خاطر بسپار</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500
             hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 
             shadow-md hover:shadow-lg hover:cursor-pointer"
          >
            ورود
          </button>
        </form>

        {/* Signup Link */}
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
