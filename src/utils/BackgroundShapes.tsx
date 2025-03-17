import { motion } from "framer-motion";
export default function BackgroundShapes() {
  return (
    <div>
      {/*شکل اول */}
      <motion.div
        className="absolute w-24 h-24 bg-green-300 rounded-full opacity-10"
        animate={{
          x: ["0%", "10%", "0%"], // حرکت کمی به چپ و راست
          y: ["0%", "3%", "0%"], // حرکت کمی به بالا و پایین
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ top: "30%", left: "80%" }}
      />
      {/*شکل دوم */}
      <motion.div
        className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-10"
        animate={{
          x: ["0%", "12%", "0%"], // حرکت کمی به چپ و راست
          y: ["0%", "-10%", "0%"], // حرکت کمی به بالا و پایین
        }}
        transition={{
          duration: 5,
          repeat: Infinity, // تکرار نامحدود
          repeatType: "loop", // نوع تکرار: لوپ
          ease: "easeInOut", // نوع انیمیشن ملایم
        }}
        style={{ top: "20%", left: "10%" }}
      />
      {/*شکل سوم */}
      <motion.div
        className="absolute w-32 h-32 bg-red-300 rounded-full opacity-5"
        animate={{
          x: ["0%", "10%", "0%"], // حرکت کمی به چپ و راست
          y: ["0%", "8%", "0%"], // حرکت کمی به بالا و پایین
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%" }}
      />
      {/*شکل چهارم */}
      <motion.div
        className="absolute w-15 h-15 bg-lime-300 rounded-full opacity-10"
        animate={{
          x: ["0%", "3%", "0%"], // حرکت کمی به چپ و راست
          y: ["0%", "5%", "0%"], // حرکت کمی به بالا و پایین
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "97%" }}
      />
      <motion.div
        className="absolute w-23 h-23 bg-fuchsia-500 rounded-full opacity-10"
        animate={{
          x: ["0%", "8%", "0%"], // حرکت کمی به چپ و راست
          y: ["0%", "7%", "0%"], // حرکت کمی به بالا و پایین
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ top: "60%", left: "75%" }}
      />
    </div>
  );
}
