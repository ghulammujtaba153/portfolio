"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <motion.section
        initial={{ height: "20rem" }}
        animate={{ height: isExpanded ? "auto" : "20rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]">
          <a href={link} target="_blank">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </a>
          
          <motion.p
            className={`mt-2 leading-relaxed text-gray-700 dark:text-white/70 transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {description}
          </motion.p>
          <button
            onClick={handleToggle}
            className="flex items-center justify-center w-8 h-10 p-2 mt-2 mb-2 rounded-full hover:bg-white/70 hover:bg-gray-300 transition-all duration-300 shadow-md dark:bg-white/20 dark:hover:bg-white/30"
          >
            {isExpanded ? <FaArrowUp size={20} /> : <FaArrowDown size={15} />}
          </button>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={100}
          className="absolute hidden sm:block top-8 -right-40 rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </motion.section>
    </motion.div>
  );
}
