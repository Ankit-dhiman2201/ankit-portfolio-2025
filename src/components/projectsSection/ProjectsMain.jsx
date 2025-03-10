import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import project1 from "../../assets/flight-track.png";
import project2 from "../../assets/static-project.png";
import project3 from "../../assets/portfoliopp.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/age_cacl.png";

const projects = [
  {
    name: "Flight-Tracker Website",
    year: "Jan2025",
    align: "right",
    image: [project1],
    link: "https://merry-pithivier-76a1e3.netlify.app/",
  },
  {
    name: "Hosted a static website using Amazon S3",
    year: "Dec2024",
    align: "left",
    image: [project2],
    link: "#",
  },
  {
    name: "Portfolio Project",
    year: "Sept2024",
    align: "right",
    image: [project3],
    link: "https://ankit-portfolio-2201.netlify.app/",
  },
  {
    name: " AWS Capstone Project",
    year: "Sept2024",
    align: "left",
    image: [project4],
    link: "http://capstoneelb-1537556103.us-east-1.elb.amazonaws.com/",
  },
  {
    name: "Age-calculator",
    year: "Feb2025",
    align: "right",
    image: [project5],
    link: "https://dapper-peony-07165f.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
