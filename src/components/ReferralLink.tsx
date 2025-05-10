"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ReferralLink() {
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);

  console.log("session in ReferralLink:", session);

  if (!session || !session.user)
    return <div className="mb-4 text-red-500">session is null</div>;
  const userId = (session.user as { id: string }).id;
  if (!userId) return <div className="mb-4 text-red-500">userId is null</div>;

  const referralUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/signup?ref=${userId}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-start bg-white rounded-xl shadow p-4 mb-6 border border-gray-100">
      <span className="font-bold text-gray-700 mb-2">
        لینک دعوت اختصاصی شما:
      </span>
      <div className="flex w-full items-center gap-2">
        <input
          type="text"
          value={referralUrl}
          readOnly
          className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onFocus={(e) => e.target.select()}
        />
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg text-white font-bold transition-colors duration-200 ${
            copied ? "bg-green-500" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {copied ? "کپی شد!" : "کپی"}
        </button>
      </div>
    </div>
  );
}
