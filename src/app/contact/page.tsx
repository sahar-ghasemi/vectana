import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PublicLayout from "../public-layout";

import {
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <PublicLayout>
      <div className="p-10 w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-start items-center">
          <div className=" bg-gradient-to-br from-purple-600 via-fuchsia-400 to-blue-500 rounded-b-full p-2 w-3/4"></div>
          <p className="font-bold text-4xl mt-3">ارتباط با ما</p>

          <p className="text-lg">
            اگر نیاز به ارتباط با ما دارید از روش‌های زیر می‌توانید با ما در
            ارتباط باشید
          </p>
          <p className="text-lg justify-center mb-7">
            ما از شنیدن صدای شما خوشحال خواهیم شد
          </p>
          <p className="mb-2">info@vectana.ir</p>
          <p>0218745657</p>
          <div>
            <ul className="flex items-center space-x-3 mt-9 ">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-theme-purple-default"
                >
                  <FontAwesomeIcon icon={faTelegram} className="w-4 h-4 " />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-theme-purple-default"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-theme-purple-default"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-theme-purple-light rounded-3xl p-3">
          <div className="p-4 mx-auto max-w-xl">
            <form className=" space-y-3">
              <div>
                <label className="text-sm text-slate-800 font-medium mb-2 block">
                  نام
                </label>
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className=" w-full  py-2.5 px-4 text-gray-800 border-theme-purple-default bg-gray-100 border rounded-xl  focus:bg-gradient-to-br
                   focus:from-purple-600 focus:to-blue-500 focus:outline-none focus:text-white font-medium  text-sm  me-2 mb-2"
                />
              </div>

              <div>
                <label className="text-sm text-slate-800 font-medium mb-2 block">
                  ایمیل
                </label>
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className=" w-full  py-2.5 px-4 text-gray-800 border-theme-purple-default bg-gray-100 border rounded-xl  focus:bg-gradient-to-br
                  focus:from-purple-600 focus:to-blue-500 focus:outline-none focus:text-white font-medium  text-sm  me-2 mb-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-800 font-medium mb-2 block">
                  موضوع
                </label>
                <input
                  type="text"
                  placeholder="موضوع را وارد کنید"
                  className=" w-full  py-2.5 px-4 text-gray-800 border-theme-purple-default bg-gray-100 border rounded-xl  focus:bg-gradient-to-br
                  focus:from-purple-600 focus:to-blue-500 focus:outline-none focus:text-white font-medium  text-sm  me-2 mb-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-800 font-medium mb-2 block">
                  پیام
                </label>
                <textarea
                  placeholder="پیام خود را وارد کنید"
                  rows={4}
                  className="w-full px-4 text-gray-800 rounded-xl bg-gray-100 border border-theme-purple-default focus:bg-gradient-to-br
                  focus:from-purple-600 focus:to-blue-500 focus:outline-none focus:text-white text-sm pt-3 "
                ></textarea>
              </div>
              <button
                type="button"
                className="text-white w-full hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
