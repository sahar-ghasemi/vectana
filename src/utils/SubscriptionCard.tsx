"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamic import
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const SubscriptionCard: React.FC = () => {
  const remainingDays = 20; // تعداد روزهای باقی‌مانده
  const maxDays = 30; // حداکثر تعداد روز اشتراک

  let chartColor = "#f44336"; // قرمز پیش‌فرض
  if (remainingDays >= 10 && remainingDays <= 20) {
    chartColor = "#ff9800"; // زرد
  } else if (remainingDays > 20 && remainingDays <= 30) {
    chartColor = "#4caf50"; // سبز
  }

  const options: ApexOptions = {
    chart: {
      type: "radialBar", // نوع نمودار دایره‌ای
      height: "100%", // ارتفاع 100% (به اندازه کادر)
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "60%", // اندازه دایره خالی وسط
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: "20px",
            fontFamily: "Inter, sans-serif",
            color: "#555",
            offsetY: -10,
          },
          value: {
            fontSize: "22px",
            fontFamily: "Inter, sans-serif",
            color: chartColor,
            offsetY: 10,
            formatter: (value: number) => `${Math.floor(value)}%`, // اضافه کردن علامت درصد
          },
        },
      },
    },
    fill: {
      colors: [chartColor], // رنگ دایره بر اساس تعداد روزها
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["باقی مانده"],
  };

  // محاسبه درصد باقی‌مانده
  const series = [(remainingDays / maxDays) * 100]; // درصد باقی‌مانده از 30 روز

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-xs mx-auto">
      <h3 className="text-xl font-semibold  text-gray-700">اشتراک شما</h3>
      <ApexCharts
        options={options}
        series={series}
        type="radialBar"
        height={250} // ارتفاع تنظیم شده
      />
      <p className="mt-4 text-center text-gray-600">
        {remainingDays} روز از اشتراک شما باقی مانده
      </p>
    </div>
  );
};

export default SubscriptionCard;
