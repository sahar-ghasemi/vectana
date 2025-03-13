import BackgroundShapes from "./BackgroundShapes";

export default function HighlightTextSection() {
  return (
    <div className="flex justify-center items-center p-10 w-full bg-theme-background-purple ">
      <BackgroundShapes />
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 mt-6">
          از کجا دوست داری{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
            دانلود{" "}
          </span>
          کنی ؟
        </h1>
        <div className="text-xl pt-6">
          به سادگی{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-xl">
            فقط یک کلیک کردن{" "}
          </span>{" "}
          میتونی از هر سایتی که میخوای چیزی که دنبالشی رو دانلود کنی{" "}
        </div>
      </div>
    </div>
  );
}
