import Projects from "../components/Projects";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import SkillsPage from "./SkillsPage";
import WelcomePage from "./WelcomePage";

const Home = () => {
  return (
    <>
      <WelcomePage />
      <AboutPage />
      <Projects />
      <SkillsPage />
      <ContactPage />
    </>
  );
};

export default Home;
