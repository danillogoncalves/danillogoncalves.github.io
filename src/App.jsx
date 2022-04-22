import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GithubAPIDataContext from "./context/GithubAPIDataContext";
import Bio from "./pages/Bio";
import HardSkill from "./pages/HardSkill";
import Projects from "./pages/Projects";
import SoftSkill from "./pages/SoftSkill";

function App() {
  const { getDataGitHubRepos } = useContext(GithubAPIDataContext);

  useEffect(() => {
    getDataGitHubRepos();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/hardskill" element={<HardSkill />} />
          <Route path="/softskill" element={<SoftSkill />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
