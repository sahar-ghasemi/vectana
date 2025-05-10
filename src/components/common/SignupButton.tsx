import Link from "next/link";

export default function SignupButton() {
  return (
    <Link
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg 
    group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white cursor-pointer"
      href="/signup"
    >
      <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent">
        ثبت نام{" "}
      </span>
    </Link>
  );
}
