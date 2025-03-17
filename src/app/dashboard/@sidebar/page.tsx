"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faFileAlt,
  faDownload,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const links = [
    { label: "داشبورد", href: "/dashboard", icon: faTachometerAlt },
    { label: "ثبت درخواست", href: "/dashboard/request", icon: faFileAlt },
    { label: "گزارشات و دانلود", href: "/dashboard/reports", icon: faDownload },
    {
      label: "خرید اشتراک",
      href: "/dashboard/subscriptions",
      icon: faShoppingCart,
    },
    { label: "خروج", href: "/", icon: faSignOutAlt },
  ];

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <nav className="flex flex-col gap-4 p-4 bg-white border-l-2 border-gray-100 text-gray-800 w-64 h-screen">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/images/vectana-logo.png"
          width="150"
          height="150"
          alt="Logo"
        />
      </div>

      {/* Links */}
      {links.map(({ label, href, icon }) => (
        <Link
          key={label}
          href={href}
          onClick={() => handleLinkClick(label)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 text-gray-600
            ${
              activeLink === label
                ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white"
                : "hover:bg-gradient-to-bl hover:from-purple-600 hover:to-blue-500 hover:text-white"
            }`}
        >
          <FontAwesomeIcon icon={icon} className={`w-5 h-5  `} />
          <span className="text-md">{label}</span>
        </Link>
      ))}
      {/* Divider */}
      <div className="border-b border-gray-300 mb-2"></div>
      {/* Card Info */}
      <div className="bg-purple-100 w-9/10 h-auto py-4 mx-auto rounded-lg grid grid-cols-2 px-1">
        <div className="my-auto">
          <Image src="/images/discount.png" alt="" width="100" height="100" />
        </div>
        <div className="text-center my-auto">
          <p className="text-xs my-5">برای دریافت تخفیف کلیک کنید</p>
          <Link
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-xs px-3 py-1.5 text-center "
            href="/"
          >
            دریافت
          </Link>
        </div>
      </div>
      {/* put extra space at the bottom */}
      <div className="p-20"></div>
    </nav>
  );
}
