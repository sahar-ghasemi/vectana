"use client";

interface Payment {
  requestDate: string;
  amount: number;
  paymentDate: string | null; // ممکن است هنوز پرداخت نشده باشد
  status: "تایید" | "در انتظار" | "عدم تایید";
}

const PayInfoList: React.FC = () => {
  const payments: Payment[] = [
    {
      requestDate: "2025-03-16",
      amount: 50000,
      paymentDate: "2025-03-17",
      status: "تایید",
    },
    {
      requestDate: "2025-03-18",
      amount: 75000,
      paymentDate: null,
      status: "در انتظار",
    },
    {
      requestDate: "2025-03-19",
      amount: 120000,
      paymentDate: "2025-03-20",
      status: "عدم تایید",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6 w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        لیست پرداخت‌های شما
      </h3>

      <table className="w-full table-auto text-sm text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 text-right">تاریخ ثبت درخواست</th>
            <th className="px-4 py-2 text-right">مبلغ</th>
            <th className="px-4 py-2 text-right">تاریخ واریز</th>
            <th className="px-4 py-2 text-right">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">{payment.requestDate}</td>
              <td className="px-4 py-2">
                {payment.amount.toLocaleString()} تومان
              </td>
              <td className="px-4 py-2">
                {payment.paymentDate ? payment.paymentDate : "هنوز واریز نشده"}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    payment.status === "تایید"
                      ? "bg-green-500 text-white"
                      : payment.status === "در انتظار"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayInfoList;
