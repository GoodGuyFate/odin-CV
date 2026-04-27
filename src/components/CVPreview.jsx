import "../styles/CVPreview.css";

export default function CVPreview({ data, onBack }) {
  const { generalInfo, experience, education, skills } = data;

  return (
    <div className="cv-page-wrap">
      <div className="cv-actions no-print">
        <button onClick={onBack}>← Back to Edit</button>
        <button className="btn-download" onClick={() => window.print()}>
          ↓ Download PDF
        </button>
      </div>

      <div className="cv">
        {/* HEADER */}
        <div className="cv-header">
          <h1 className="cv-name">{generalInfo.name}</h1>
          <p className="cv-contact">
            {generalInfo.email} | {generalInfo.phone}
          </p>
        </div>

        <hr className="cv-divider-bold" />

        <p className="cv-summary">{generalInfo.summary}</p>

        <hr className="cv-divider" />

        {/* EXPERIENCE */}
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="cv-job">
              <div className="cv-job-header">
                <span className="cv-company">{job.company}</span>
                <span className="cv-meta">{job.location}</span>
              </div>
              {job.roles.map((role, j) => (
                <div key={j} className="cv-job-role">
                  <span className="cv-role-title">{role.title}</span>
                  <span className="cv-meta">{role.dates}</span>
                </div>
              ))}
              <ul className="cv-bullets">
                {job.bullets.map((bullet, k) => (
                  <li key={k}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="cv-divider" />

        {/* EDUCATION */}
        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="cv-education">
              <div className="cv-job-header">
                <span className="cv-company">{edu.school}</span>
                <span className="cv-meta">{edu.year}</span>
              </div>
              <p className="cv-education-sub">
                {edu.degree} &nbsp;|&nbsp; {edu.gpa}
              </p>
            </div>
          ))}
        </section>

        <hr className="cv-divider" />

        {/* SKILLS */}
        <section className="cv-section">
          <h2 className="cv-section-title">Skills</h2>
          <ul className="cv-skills">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}