import Image from "next/image";

export default function CurvedSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* سمت راست: متن */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 mb-4">
            عنوان متن جذاب
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 mb-6">
            این یک توضیح کوتاه است که می‌تواند اطلاعات بیشتری را برای کاربران
            فراهم کند. شما می‌توانید محتوای متنی بیشتری اضافه کنید.
          </p>
          <p className="text-sm sm:text-lg text-gray-700">
            ادامه توضیحات و اطلاعات بیشتر برای جذب توجه کاربران.
          </p>
        </div>
      </div>

      {/* سمت چپ: منحنی و عکس */}
      <div className="flex flex-col items-center justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-10">
        {/* مستطیل اول (بلندتر) */}
        <div
          className="w-full sm:w-2/3 md:w-55 h-60 sm:h-80 md:h-120 rounded-full overflow-hidden"
          style={{
            backgroundImage: "url('/images/6.png')", // مسیر تصویر
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* مستطیل دوم */}
        <div className="w-full sm:w-2/3 md:w-70 h-60 sm:h-80 md:h-150 rounded-full overflow-hidden relative shadow-[0px_4px_20px_rgba(0,0,0,0.5)]">
          <Image
            src="/images/4.gif" // مسیر گیف شما
            alt="Your GIF"
            className="w-full h-full object-cover" // مهمترین تغییر اینجا است
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
