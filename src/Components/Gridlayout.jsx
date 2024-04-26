import React from "react";
import { motion } from "framer-motion";
import {
  ayush1,
  BD1,
  android1,
  figma2,
  gridB,
  java2,
  user1,
  react1,
  nodejs1,
} from "../../public/assets/assetsManager";
export default function Gridlayout() {
  return (
    <div>
      <div className="flex-wrap w-fit relative">
        <img
          src={ayush1}
          className="absolute left-[31%] mt-[-2%] h-[26.6rem] "
          alt=""
        />

        <div className="absolute rotate-[-10deg] left-[4%] bottom-[7rem] w-fit">
          <motion.img
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            src={figma2}
            className="h-[5.5rem]"
            alt="Figma Designer"
          />
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src={react1}
          className="absolute rotate-[6.8deg] mt-[-1rem] h-[7.7rem] left-[15rem] w-fit "
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src={java2}
          alt=""
          className="absolute rotate-[10deg] bottom-[-0.7rem] left-[14rem] h-[6.7rem]"
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src={user1}
          className="absolute right-[23%] h-[6rem] rotate-[-8deg]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src={nodejs1}
          className="absolute right-[10%] h-[8.7rem] rotate-[8deg] bottom-[7.4rem]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          src={BD1}
          className="absolute right-[20%] h-[5.7rem] rotate-[6deg] bottom-[0rem]"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          src={android1}
          className="absolute right-[26%] h-[5.7rem] rotate-[8deg] bottom-[7.8rem]"
          alt=""
        />

        <img src={gridB} className="h-[22rem]" alt="" />
      </div>
    </div>
  );
}
