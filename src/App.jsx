import WelcomePage from "./pages/WelcomePage";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
