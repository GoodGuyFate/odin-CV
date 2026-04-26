import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Experience from "./components/Experience";



export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [experience, setExperience] = useState([])
  
  return (
    <div className="app">
      <GeneralInfo data={generalInfo} onChange={setGeneralInfo} />
      <Experience data={experience} onChange={setExperience} />

      <pre style={{ marginTop: "2rem", background: "#f5f5f5", padding: "1rem" }}>
        {JSON.stringify({ generalInfo, experience }, null, 2)}
      </pre>
    </div>
  );
}
