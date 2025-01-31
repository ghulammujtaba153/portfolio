"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";

const education = [
  {
    title: "Bachelor of Science in Software Engineering",
    year: "2021-2025",
    institute: "COMSATS, Islamabad",
  },
  {
    title: "Intermediate",
    year: "2018-2021",
    institute: "Punjab Group of Colleges, Blue Area Islamabad",
  },
  {
    title: "Matriculation",
    year: "2018",
    institute: "Army Public Schools, Islamabad",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref } = useSectionInView("#education");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
            id="education"
            ref={ref}
            className="mb-20 mt-10 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
      <div className="container mx-auto px-4">
        <SectionHeading>Education Journey</SectionHeading>
        <div className="relative">
          {/* Timeline central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-24">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-1/2 px-6 ${
                      isEven ? "text-right" : "text-left"
                    }`}
                  >
                    <motion.div
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <div className="text-lg font-medium text-gray-700 dark:text-gray-400 mb-2">
                        {edu.year}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.institute}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 border-4 border-gray-900 dark:border-gray-400 rounded-full"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      </motion.section>
  );
}
