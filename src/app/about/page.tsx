"use client";
import Image from "next/image";
import PublicLayout from "../public-layout";
import BackgroundShapes from "@/utils/BackgroundShapes";

export default function About() {
  return (
    <PublicLayout>
      <BackgroundShapes />
      <div className=" mt-9 justify-center text-center ">
        <p className="font-bold text-3xl mb-4">وکتانا </p>
        <p className="w-2/3 mx-auto text-gray-500 ">
          محیط‌های فراگیری ایجاد شود نه تنها باعث رشد و موفقیت فردی می‌شود، بلکه
          انسجام جامعه را نیز تقویت که همه فرصت پیشرفت داشته باشند. این رویکرد
          نه تنها باعث رشد و موفقیت فردی می‌شود، بلکه انسجام جامعه را نیز تقویت
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 px-4 py-12">
        {/* Right Column: Grid with 3 items */}
        <div className="text-center my-auto  w-4/5 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">
            هدف ما در وکتانا ارائه خدمات با کیفیت به شماست
          </h2>
          <p className="text-gray-500 mt-7">
            محیط‌های فراگیری ایجاد شود نه تنها باعث رشد و موفقیت فردی می‌شود،
            بلکه انسجام جامعه را نیز تقویت که همه فرصت پیشرفت داشته باشند. این
            رویکرد نه تنها باعث رشد و موفقیت فردی می‌شود، بلکه انسجام جامعه را
            نیز تقویتمحیط‌های فراگیری ایجاد شود نه تنها باعث رشد و موفقیت فردی
            می‌شود، بلکه انسجام جامعه را نیز تقویت که همه فرصت پیشرفت داشته
            باشند. این رویکرد نه تنها باعث رشد و موفقیت فردی می‌شود، بلکه انسجام
            جامعه را نیز تقویت
          </p>
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
           font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3 hover:cursor-pointer"
          >
            ارتباط با ما
          </button>
        </div>
        {/* Left Column: Image */}
        <div className="flex justify-center items-center p-10 ">
          <Image
            className="w-full h-full object-cover rounded-3xl"
            src="/images/about-us1.jpg"
            width="400"
            height="400"
            alt="Your image"
          />
        </div>
      </div>
    </PublicLayout>
  );
}
