"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Request to reset password for email:", email);
    alert("لینک بازنشانی رمز عبور به ایمیل شما ارسال شد.");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br
    from-blue-100 to-purple-200"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          فراموشی رمز عبور
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              ایمیل
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-left w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg px-5 py-2.5 text-center"
          >
            ارسال لینک بازنشانی
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          به صفحه ورود برگشتید؟{" "}
          <Link href="/login" className="text-purple-500 hover:underline">
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}
