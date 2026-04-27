import { useState } from "react";
import "./App.css";
import CVPreview from "./components/CVPreview";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer no-print">
      © {year}{" "}
      <a href="https://github.com/GoodGuyFate" target="_blank" rel="noopener noreferrer">
        GoodGuyFate
      </a>
    </footer>
  );
}

export default function App() {
  const [mode, setMode] = useState("form");

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <>
      {mode === "form" ? (
        <>
          <GeneralInfo data={generalInfo} onChange={setGeneralInfo} />
          <Experience data={experience} onChange={setExperience} />
          <Education data={education} onChange={setEducation} />
          <Skills data={skills} onChange={setSkills} />
          <button onClick={() => setMode("preview")}>Create CV</button>
        </>
      ) : (
        <CVPreview
          data={{ generalInfo, experience, education, skills }}
          onBack={() => setMode("form")}
        />
      )}
      <Footer />
    </>
  );
}