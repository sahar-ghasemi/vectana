"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ReferralLink() {
  const [copied, setCopied] = useState(false);
  const referralCode = "SAMPLE123"; // Sample referral code
  const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">لینک معرفی شما</h3>
      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
        <button
          onClick={handleCopy}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors order-1"
          title="کپی لینک"
        >
          <FontAwesomeIcon
            icon={copied ? faCheck : faCopy}
            className="w-5 h-5"
          />
        </button>
        <input
          type="text"
          value={referralLink}
          readOnly
          className="flex-1 bg-transparent border-none outline-none text-sm text-left order-2"
          dir="ltr"
        />
      </div>
      <p className="text-sm text-gray-600 mt-2">
        با اشتراک‌گذاری این لینک با دوستان خود، اعتبار رایگان دریافت کنید
      </p>
    </div>
  );
}
