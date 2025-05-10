"use client";
import { TestSession } from "@/components";
import { DownloadCart, SubscriptionCard } from "@/utils";
import ReferralLink from "@/components/ReferralLink";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const userId = session?.user && (session.user as { id?: string }).id;

  return (
    <>
      <ReferralLink />
      <TestSession />
      <div className="mb-4 p-2 bg-gray-100 rounded text-gray-800">
        <strong>User ID:</strong> {userId || "(no user id)"}
        <br />
        <strong>Session status:</strong> {status}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mx-auto py-4 items-start justify-center">
        <div className="md:col-span-5">
          <DownloadCart />
        </div>
        <div className="md:col-span-3 ">
          <SubscriptionCard />
        </div>
      </div>
    </>
  );
}
