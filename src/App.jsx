import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import Certification from "./components/Certification/Certification";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import Education from "./components/Education/Education";

import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <Education />
      <SkillsMain />
      <SubSkills />

      <Certification />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
