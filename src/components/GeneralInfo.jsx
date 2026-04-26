export default function GeneralInfo({ data, onChange }) {
  return (
    <fieldset className="form-section">
      <legend>General Information</legend>

      <label>
        Full Name
        <input
          type="text"
          placeholder="John Doe"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          placeholder="example@email.com"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          placeholder="555-555-5555"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
      </label>

      <label>
        Professional Summary
        <textarea
          rows="4"
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
        />
      </label>
      
    </fieldset>
  );
}
