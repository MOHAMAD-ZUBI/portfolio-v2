"use client";
import React from "react";

import { GrAppsRounded } from "react-icons/gr";
import {
  RiCss3Line,
  RiHtml5Line,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  SiAmazonaws,
  SiExpress,
  SiGit,
  SiGithub,
  SiLaravel,
  SiMongodb,
  SiReactquery,
  SiVercel,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";

const InfoCard = () => {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const technologies = [
    { label: "NextJs", icon: <RiNextjsLine size={18} /> },
    { label: "Typescript", icon: <TbBrandTypescript size={18} /> },
    { label: "ReactJs", icon: <RiReactjsLine size={18} /> },
    { label: "React Query", icon: <SiReactquery size={18} /> },
    { label: "Tailwind CSS", icon: <RiTailwindCssLine size={18} /> },
    { label: "HTML5", icon: <RiHtml5Line size={18} /> },
    { label: "CSS3", icon: <RiCss3Line size={18} /> },
    { label: "NodeJs", icon: <RiNodejsLine size={18} /> },
    { label: "ExpressJs", icon: <SiExpress size={18} /> },
    { label: "MongoDB", icon: <SiMongodb size={18} /> },
    { label: "Laravel", icon: <SiLaravel size={18} /> },
    { label: "AWS", icon: <SiAmazonaws size={18} /> },
    { label: "Git", icon: <SiGit size={18} /> },
    { label: "Github", icon: <SiGithub size={18} /> },
    { label: "Vercel", icon: <SiVercel size={18} /> },
  ];

  return (
    <motion.div variants={container} className=" flex flex-col gap-5 ">
      <div className=" bg-white  border-[1px] border-gray-200 dark:bg-[#0E0F11] rounded-3xl max-w-[600px] gap-4  flex flex-col justify-start">
        <div className=" w-full flex flex-col gap-4 p-8">
          <GrAppsRounded className="text-gray-500" size={34} />
          <h1 className="font-bold dark:text-gray-200 text-xl">
            Technologies I love to build with
          </h1>
          <p className=" text-gray-500 ">
            {" "}
            With over 2 years of experience creating digital assets, I have a
            deep and intuitive understanding of how the interfaces of the best
            software products in the world are designed. This is just some of
            the software I have used over that time.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={container}
          className=" p-8  dark:bg-[#0c0c0c]  bg-gray-100 flex flex-wrap gap-2 rounded-b-3xl w-full"
        >
          {technologies.map(({ label, icon }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex flex-row cursor-pointer select-none gap-2 dark:bg-[#1d1d1d] bg-white text-sm w-fit rounded-3xl py-2 px-4 items-center"
            >
              {icon} {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
