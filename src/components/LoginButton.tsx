import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      className="text-white bg-themeDefaultPurple hover:bg-themeDarkPurple cursor-pointer font-medium rounded-lg text-md px-6 py-2 text-center"
      href="/login"
    >
      ورود به سایت
    </Link>
  );
}
