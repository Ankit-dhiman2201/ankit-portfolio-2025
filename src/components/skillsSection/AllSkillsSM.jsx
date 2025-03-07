import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "MySQL",
    icon: FaDatabase,
  },
  {
    skill: "Bootstrap",
    icon: BsBootstrap,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    skill: "AWS EC2",
    icon: FaAws,
  },
  {
    skill: "AWS RDS",
    icon: FaAws,
  },
  {
    skill: "AWS S3",
    icon: FaAws,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
