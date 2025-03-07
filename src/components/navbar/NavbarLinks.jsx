import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Education", section: "education" },
  { link: "Skills", section: "skills" },
  { link: "Certifications&Training", section: "certification" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  useEffect(() => {
    // Scroll to the top when the page is refreshed
    scroll.scrollToTop();
  }, []); // This runs only once when the component is mounted

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
