"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LearningSection() {
  return (
    <div className=" flex justify-center items-center bg-gradient-to-l from-amber-100 to-lime-500 grid grid-cols-1 md:grid-cols-2 p-10 w-full h-[100vh]">
      {/* سمت چپ: متن */}

      <div className="flex justify-center items-center w-full mr-30 md:w-1/2 p-6 bg-white border border-gray-200 rounded-4xl shadow-md h-70 flex-col">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 text-center">
          میخوای چیزی دانلود کنی ؟
        </h5>
        <p className="mb-6 font-bold text-gray-700 text-center">
          ما توی وکتانا تنها هدفمون راحتی شماست پس خیالت راحت باشه که تمام
          تلاشمون رو کردیم تا خیلی سریع و راحت بتونی چیزی که دنبالشی رو پیدا کنی
        </p>

        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-br rounded-lg from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-800"
        >
          بزن بریم
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

      {/* سمت راست: ویدئو */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", bounce: 0.5 },
        }}
        className="flex justify-center items-center p-5"
      >
        <div className="w-full max-w-full">
          <video
            src="./videos/test.mp4"
            controls
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
