import SubscriptionPlans from "./SubscriptionPlans";
export default function SubscriptionsPage() {
  return (
    <div className="grid grid-cols-1 ml-20">
      <div className="bg-theme-background-purple p-3 rounded-lg mt-10 ">
        <p className="font-semibold">نحوه خرید پنل انتخاب شده:</p>
        <p>
          مبلغ پنل انتخابی را به شماره کارت زیر واریز و در همین صفحه اطلاعات ان
          را ثبت بفرمائید
        </p>
        <p> 5859-3465-8374-4875</p>
      </div>

      <div>
        <SubscriptionPlans />
      </div>
    </div>
  );
}
