import "../styles/CVPreview.css";

export default function CVPreview({ data }) {
    const {generalInfo, experience, education, skills} = data;
  return (
    <div className="cv">
    {/* HEADER */}
      <div className="cv-header">
        <h1 className="cv-name">{generalInfo.name}</h1>
        <p className="cv-contact">{generalInfo.email} | {generalInfo.phone}</p>
      </div>

      <hr className="cv-divider-bold" />

    {/* Summary */}
      <p className="cv-summary">
        {generalInfo.summary}
      </p>

      <hr className="cv-divider" />

      <section className="cv-section">
        <h2 className="cv-section-title">Professional Experience</h2>

        <div className="cv-job">
          <div className="cv-job-header">
            <span className="cv-company">Company Name</span>
            <span className="cv-meta">City, Country</span>
          </div>
          <div className="cv-job-role">
            <span className="cv-role-title">Job Title</span>
            <span className="cv-meta">Month Year - Month Year</span>
          </div>
          <ul className="cv-bullets">
            <li>
              Key responsibility or achievement, quantifying impact where
              possible.
            </li>
            <li>Another accomplishment that demonstrates relevant skills.</li>
            <li>
              Third bullet showing scope, collaboration, or technical
              proficiency.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-header">
            <span className="cv-company">Previous Company</span>
            <span className="cv-meta">City, Country</span>
          </div>
          <div className="cv-job-role">
            <span className="cv-role-title">Senior Role Title</span>
            <span className="cv-meta">Month Year - Month Year</span>
          </div>
          <div className="cv-job-role">
            <span className="cv-role-title">Junior Role Title</span>
            <span className="cv-meta">Month Year - Month Year</span>
          </div>
          <ul className="cv-bullets">
            <li>Key responsibility highlighting the most relevant skills.</li>
            <li>Achievement showing growth or progression at this company.</li>
            <li>
              Collaboration or cross-functional work demonstrating teamwork.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-header">
            <span className="cv-company">
              Extracurricular / Personal Projects
            </span>
            <span className="cv-meta">City, Country</span>
          </div>
          <ul className="cv-bullets">
            <li>
              Describe a personal project or self-directed work showing relevant
              skills.
            </li>
            <li>
              Highlight tools, materials, or techniques used independently.
            </li>
          </ul>
        </div>
      </section>

      <hr className="cv-divider" />

      <section className="cv-section">
        <h2 className="cv-section-title">Education</h2>
        <div className="cv-education">
          <div className="cv-job-header">
            <span className="cv-company">School / University Name</span>
            <span className="cv-meta">2024</span>
          </div>
          <p className="cv-education-sub">
            Degree or Diploma &nbsp;|&nbsp; GPA X.X
          </p>
        </div>
      </section>

      <hr className="cv-divider" />

      <section className="cv-section">
        <h2 className="cv-section-title">Skills</h2>
        <ul className="cv-skills">
          <li>Skill or competency one</li>
          <li>Skill or competency two</li>
          <li>Skill or competency three</li>
          <li>Skill or competency four</li>
          <li>Skill or competency five</li>
          <li>Skill or competency six</li>
        </ul>
      </section>
    </div>
  );
}
