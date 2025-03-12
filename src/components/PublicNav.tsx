"use client";
import Link from "next/link";
import { useState } from "react";
import { LoginButton } from "./";
export default function PublicNav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "صفحه اصلی", href: "/" },
    { label: "مقالات", href: "/blog" },
    { label: "تماس با ما", href: "/contact" },
    { label: "درباره ما", href: "/about" },
  ];
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* لوگو */}
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          {/*  ورود به سایت و تلفن پشتیبانی  */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {/* <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a> */}
            <LoginButton />
          </div>
        </div>
        {/*منو */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">باز کردن منو</span>
          {/* آیکون منو */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <ul
              className="font-medium flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-8
  p-4 md:p-0 mt-4 md:mt-0 md:bg-white dark:md:bg-gray-900"
            >
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
