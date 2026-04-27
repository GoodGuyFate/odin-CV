export default function Skills({ data, onChange }) {
  function addSkill() {
    onChange([...data, ""]);
  }

  function deleteSkill(index) {
    onChange(data.filter((_, i) => i !== index));
  }

  return (
    <fieldset className="form-section">
      <legend>Skills</legend>

      {data.map((skill, index) => (
        <div key={index} className="skill-entry">
          <input
            type="text"
            value={skill}
            onChange={(e) => {
              onChange(data.map((s, i) => (i === index ? e.target.value : s)));
            }}
          />
          <button type="button" onClick={() => deleteSkill(index)}>
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={addSkill}>
        + Add Skill
      </button>
    </fieldset>
  );
}
