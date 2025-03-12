"use client";

import Link from "next/link";
export default function Sidebar() {
  const links = [
    { label: "داشبورد", href: "/dashboard" },
    { label: "ثبت درخواست", href: "/dashboard/request" },
    { label: "گزارشات و دانلود", href: "/dashboard/reports" },
    { label: "خرید اشتراک", href: "/dashboard/subscriptions" },
  ];
  return (
    <nav className="flex flex-col gap-4">
      {links.map(({ label, href }) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
