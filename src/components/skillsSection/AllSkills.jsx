import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
