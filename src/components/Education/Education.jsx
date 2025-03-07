import React from "react";
import { motion } from "framer-motion";
import education from "./Education";

// Simple motion effect for fade-in
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 100,
    },
  },
});

// SingleEducation Component
const SingleEducation = ({ education }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:w-[400px] sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-6"
    >
      {/* Display the degree, 12th, or 10th education */}
      {education?.name && (
        <>
          <p className="font-bold text-cyan">{education.name}</p>
          <p className="text-orange">{education.institution}</p>
          <p className="text-lightGrey">{education.date}</p>
          <p className="text-lightGrey">{education.grade}</p>
        </>
      )}
    </motion.div>
  );
};

// App Component
const Education = () => {
  // Education data (Degree, 12th, 10th)
  const degreeData = {
    name: "Bachelor of Technology(IT)",
    institution: "University Institute of Technology(HPU) ",
    date: "2020 - 2024",
    grade: "8.64 CGPA",
  };
  const twelfthData = {
    name: "Senior Secondary (12th)",
    institution: "Divya Public School",
    date: "2018 - 2019",
    grade: "64 %",
  };
  const tenthData = {
    name: "Secondary (10th)",
    institution: "Divya Public School",
    date: "2016 - 2017",
    grade: "78 %",
  };

  return (
    <div
      id="education"
      className="flex justify-center items-center min-h-screen bg-gray-100 px-4"
    >
      <div className="text-center max-w-3xl w-full">
        <p className=" text-5xl text-cyan mb-6">Education</p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Degree, 12th, and 10th Sections */}
          <SingleEducation education={degreeData} />
          <SingleEducation education={twelfthData} />
          <SingleEducation education={tenthData} />
        </div>
      </div>
    </div>
  );
};

export default Education;
