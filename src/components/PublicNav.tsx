"use client";
import vectanaLogo from "../../public/images/vectana-logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SignupButton } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserCircle } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";

export default function PublicNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthChecked = useAuthStore((state) => state.isAuthChecked);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setAuthChecked = useAuthStore((state) => state.setAuthChecked);
  const router = useRouter();

  const links = [
    { label: "صفحه اصلی", href: "/" },
    { label: "مقالات", href: "/blog" },
    { label: "تماس با ما", href: "/contact" },
    { label: "درباره ما", href: "/about" },
  ];

  useEffect(() => {
    fetch("/api/auth/verify", { credentials: "include" })
      .then((res) => res.ok)
      .then((isValid) => {
        setLoggedIn(isValid);
        setAuthChecked(true);
      });
  }, [setLoggedIn, setAuthChecked]);

  return (
    <>
      <nav className="bg-white border-gray-200 drop-shadow-xs">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* لوگو */}
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={vectanaLogo}
              alt="Flowbite Logo"
              width={150}
              height={100}
            />
          </a>
          {/* ورود به سایت   */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isAuthChecked &&
              (isLoggedIn ? (
                <button
                  onClick={() => router.replace("/dashboard")}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                  title="ورود به داشبورد"
                >
                  <UserCircle size={32} className="text-purple-500" />
                </button>
              ) : (
                <>
                  <button
                    onClick={() => router.replace("/login")}
                    className="bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    ورود
                  </button>
                  <SignupButton />
                </>
              ))}
          </div>
        </div>
        <hr className=" h-0.5 border-t-0 bg-neutral-100" />
        {/*منو */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        >
          <span className="sr-only">باز کردن منو</span>
          {/* آیکون منو */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
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
  p-4 md:p-0 mt-4 md:mt-0 md:bg-white "
            >
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    className="block py-2 px-3 text-gray-900 hover:bg-transparent border-0 hover:text-theme-purple-dark md:p-0   "
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
