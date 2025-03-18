import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileLinkForm from "./FileLinkForm";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { TipCard } from "@/utils";

export default function Request() {
  return (
    <div className="ml-20">
      <div className="grid grid-cols-1 gap-y-5 ">
        <TipCard
          title="ارسال لینک فایل مورد نظر برای دانلود"
          description="برای دانلود فایل ابتدا وارد سایت موردنظر شده و صفحه مربوط به ان
            ایکون یا فایل را بازکنید و لینک ان صفحه را در این فرم قرار داده و
            درخواست دانلود را ثبت نماییید"
        />
        <FileLinkForm />
      </div>
    </div>
  );
}
