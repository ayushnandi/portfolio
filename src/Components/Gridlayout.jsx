import React from "react";
import { motion } from "framer-motion";
export default function Gridlayout() {
  return (
    <div>
      <div className="flex-wrap w-fit relative">
        <img
          src="../../public/img/ayush.png"
          className="absolute left-[30%] mt-[-1.8%] h-[26.6rem] "
          alt=""
        />

        <div className="absolute rotate-[-10deg] left-[4%] bottom-[7rem] w-fit">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            src="../../public/svg/figma1.svg"
            className="h-[5.5rem]"
            alt="Figma Designer"
          />
        </div>
        <motion.img
        initial={{ opacity: 0 , scale: 0 ,}}
        animate={{ opacity: 1 ,scale: 1, }}
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/react1.svg"
          className="absolute rotate-[6.8deg] mt-[-1rem] h-[7.7rem] left-[15rem] w-fit "
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/java2.svg"
          alt=""
          className="absolute rotate-[10deg] bottom-[-0.7rem] left-[14rem] h-[6.7rem]"
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/user1.svg"
          className="absolute right-[25rem] h-[6rem] rotate-[-8deg]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/nodejs.svg"
          className="absolute right-[12rem] h-[8.7rem] rotate-[8deg] bottom-[7.4rem]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/BD.svg"
          className="absolute right-[22rem] h-[5.7rem] rotate-[6deg] bottom-[0rem]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          src="../../public/svg/android.svg"
          className="absolute right-[26rem] h-[5.7rem] rotate-[8deg] bottom-[7.8rem]"
          alt=""
        />

        <img src="../../public/svg/gridB.svg" className="h-[22rem]" alt="" />
      </div>
    </div>
  );
}
