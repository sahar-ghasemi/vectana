"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogCard({
  image,
  title,
  text,
  date,
  author,
  avatar,
}: {
  image: string;
  title: string;
  text: string;
  date: string;
  author: string;
  avatar: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col hover:cursor-pointer "
      dir="rtl"
    >
      <Image
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
        width="100"
        height="100"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="font-bold text-lg leading-tight line-clamp-2 text-right">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3 text-right">
          {text}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 flex-row-reverse space-x-reverse">
            <span className="text-sm font-medium">{author}</span>
            <Image
              width="100"
              height="100"
              src={avatar}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center text-gray-500 text-xs space-x-1 flex-row-reverse space-x-reverse">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
