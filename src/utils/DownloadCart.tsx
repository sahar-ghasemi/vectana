"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamic import
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 18, // لبه‌های نرم ستون‌ها
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      strokeDashArray: 4,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 0.9,
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      tickAmount: 12, // تعداد برچسب‌ها روی محور X
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Inter, sans-serif", // فونت سفارشی
          colors: "#555", // رنگ متن برچسب‌ها
        },
      },
      axisTicks: {
        show: true, // نمایش خطوط تیک
        borderType: "solid", // نوع مرز تیک
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          colors: "#555", // رنگ برچسب‌های محور Y
        },
      },
    },
    colors: ["#8b3dff"], // رنگ ستون‌ها
  };

  const series = [
    {
      name: "تعداد",
      data: [0, 10, 0, 0, 0, 0, 5, 14, 28, 12, 18, 40],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full max-w-lg mx-auto">
      <h3 className="text-xl font-semibold  text-gray-700">
        تعداد دانلودهای ماهانه
      </h3>
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height={300} // ارتفاع ثابت برای نمودار
        width="100%" // نمودار به اندازه فضای موجود عرض می‌گیرد
      />
    </div>
  );
};

export default ChartCard;
