import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 rtl">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo and Social Icons */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 text-right">
            <Image
              src="/images/vectana-logo.png"
              alt="Logo"
              width="150"
              height="150"
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              ما به شما اطمینان میدهیم که با پشتیبانی 24 ساعته خود همواره شما را
              همراهی میکنیم
            </p>{" "}
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              در هر زمان که لازم بود با ما در ارتباط باشید
            </p>
            <ul className="flex items-center space-x-3 mt-9 ">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-right">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              سایت
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  مقالات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  درباره ما
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="text-right">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              بیشتر{" "}
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  پشتیبانی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  عضویت
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  قوانین و مقررات{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-black hover:text-blue-600"
                >
                  سوالات متداول{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 text-right">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              عضویت در خبرنامه هفتگی{" "}
            </p>
            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  ایمیل:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
              <button
                type="submit"
                className="text-white mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2021, All Rights Reserved by Postcraft
        </p>
      </div>
    </section>
  );
}
