import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hello! I'm Ankit, a passionate
        <span className="text-orange text-2xl">Web Developer</span> with
        expertise in building dynamic, responsive, and user-friendly websites.
        With a strong foundation in front-end technologies, I specialize in
        creating intuitive digital experiences.<br></br> Alongside my web
        development skills, I am also proficient in{" "}
        <span className="text-orange text-2xl">AWS Cloud Computing</span> ,
        leveraging the power of cloud infrastructure to build scalable,
        reliable, and cost-effective solutions. I have hands-on experience in
        setting up cloud environments, deploying applications, and managing
        resources efficiently. I'm driven by problem-solving and a desire to
        keep learning and evolving in this fast-paced industry. My goal is to
        help businesses transform their digital presence and achieve their goals
        through well-crafted web solutions and cloud-powered infrastructure.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
