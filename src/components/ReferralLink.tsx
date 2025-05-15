"use client";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

const ReferralLink = () => {
  const [referralLink, setReferralLink] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchReferralLink = async () => {
      try {
        const res = await fetch("/api/user/referral");
        const data = await res.json();
        if (!data.referralCode) throw new Error("کد معرف یافت نشد");
        setReferralLink(
          `${window.location.origin}/signup?ref=${data.referralCode}`
        );
      } catch (error) {
        setReferralLink("");
        console.error("Failed to load referral link:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferralLink();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
      </div>
    );
  }

  return (
    <div className="mx-4 my-6">
      <div className="space-y-4 p-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800">
        <h2 className="text-2xl font-bold">لینک دعوت نامه شما</h2>
        <p className="text-gray-600">
          این لینک را با دوستان خود به اشتراک بگذارید
        </p>
        <div className="flex flex-row-reverse gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            dir="ltr"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-left"
            onClick={(e) => e.currentTarget.select()}
          />
          <button
            onClick={handleCopy}
            className={`p-2 rounded-lg transition-all duration-200 ${
              copied
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            title={copied ? "کپی شد!" : "کپی لینک"}
          >
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
