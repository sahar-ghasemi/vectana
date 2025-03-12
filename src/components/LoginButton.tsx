import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      className="text-white bg-purple-600 hover:bg-purple-700 cursor-pointer font-medium rounded-lg text-sm px-4 py-2 text-center"
      href="/login"
    >
      ورود به سایت
    </Link>
  );
}
