import SubscriptionPlans from "./SubscriptionPlans";
import { TipCard } from "@/utils";
export default function SubscriptionsPage() {
  return (
    <div className="grid grid-cols-1 ml-20">
      <TipCard
        title="نحوه خرید پنل انتخاب شده"
        description={
          <>
            <p>
              برای خرید میتوانید مبلغ پنل انتخابی را به شماره کارت زیر واریز
              نموده و از منو ثبت واریز اطلاعات پرداخت خود را ثبت نامیید تا پنل
              برای شما فعال شود.
            </p>
            <p>5859-3465-8374-4875</p>
          </>
        }
      />

      <div>
        <SubscriptionPlans />
      </div>
    </div>
  );
}
