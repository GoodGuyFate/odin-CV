export default function Education({ data, onChange }) {
  function addEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      gpa: "",
      year: "",
    };
    onChange([...data, newEducation]);
  }

  function deleteEducation(id) {
    onChange(data.filter((edu) => edu.id !== id));
  }

  return (
    <fieldset className="form-section">
      <legend>Education</legend>

      {data.map((edu) => (
        <div key={edu.id} className="edu-entry">
          <input
            type="text"
            placeholder="School / University"
            value={edu.school}
            onChange={(e) => {
              onChange(
                data.map((d) =>
                  d.id === edu.id ? { ...d, school: e.target.value } : d,
                ),
              );
            }}
          />
          <input
            type="text"
            placeholder="Degree or Diploma"
            value={edu.degree}
            onChange={(e) => {
              onChange(
                data.map((d) =>
                  d.id === edu.id ? { ...d, degree: e.target.value } : d,
                ),
              );
            }}
          />
          <input
            type="text"
            placeholder="GPA"
            value={edu.gpa}
            onChange={(e) => {
              onChange(
                data.map((d) =>
                  d.id === edu.id ? { ...d, gpa: e.target.value } : d,
                ),
              );
            }}
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => {
              onChange(
                data.map((d) =>
                  d.id === edu.id ? { ...d, year: e.target.value } : d,
                ),
              );
            }}
          />
          <button type="button" onClick={() => deleteEducation(edu.id)}>
            Delete
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        + Add Education
      </button>
    </fieldset>
  );
}
