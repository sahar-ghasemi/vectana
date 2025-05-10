"use client";
import { DownloadCart, SubscriptionCard } from "@/utils";
import ReferralLink from "@/components/ReferralLink";

export default function Page() {
  return (
    <>
      <ReferralLink />

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
