export default function Experience({ data, onChange }) {
  function addJob() {
    const newJob = {
      id: crypto.randomUUID(),
      company: "",
      location: "",
      roles: [],
      bullets: [],
    };
    onChange([...data, newJob]);
  }

  function deleteJob(id) {
    onChange(data.filter((job) => job.id !== id));
  }

  return (
    <fieldset className="form-section">
      <legend>Professional Experience</legend>

      {data.map((job) => (
        <div key={job.id} className="job-entry">
          <input
            type="text"
            placeholder="Company name"
            value={job.company}
            onChange={(e) => {
              onChange(
                data.map((j) =>
                  j.id === job.id ? { ...j, company: e.target.value } : j,
                ),
              );
            }}
          ></input>
          <input
            type="text"
            placeholder="Location"
            value={job.location}
            onChange={(e) => {
              onChange(
                data.map((l) =>
                  l.id === job.id ? { ...l, location: e.target.value } : l,
                ),
              );
            }}
          ></input>
          <button
            type="button"
            onClick={() => {
              onChange(
                data.map((j) =>
                  j.id === job.id
                    ? { ...j, roles: [...j.roles, { title: "", dates: "" }] }
                    : j,
                ),
              );
            }}
          >
            + Add Role
          </button>
          {job.roles.map((role, index) => (
            <div key={index} className="role-entry">
              <input
                type="text"
                placeholder="Job Title"
                value={role.title}
                onChange={(e) => {
                  onChange(
                    data.map((j) =>
                      j.id === job.id
                        ? {
                            ...j,
                            roles: j.roles.map((r, i) =>
                              i === index ? { ...r, title: e.target.value } : r,
                            ),
                          }
                        : j,
                    ),
                  );
                }}
              />
              <input
                type="text"
                placeholder="Dates (e.g. Oct 2022 - Dec 2023)"
                value={role.dates}
                onChange={(e) => {
                  onChange(
                    data.map((j) =>
                      j.id === job.id
                        ? {
                            ...j,
                            roles: j.roles.map((r, i) =>
                              i === index ? { ...r, dates: e.target.value } : r,
                            ),
                          }
                        : j,
                    ),
                  );
                }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              onChange(
                data.map((j) =>
                  j.id === job.id ? { ...j, bullets: [...j.bullets, ""] } : j,
                ),
              );
            }}
          >
            Add Bullet
          </button>

          {job.bullets.map((bullet, index) => (
            <div key={index} className="bullet-entry">
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  onChange(
                    data.map((j) =>
                      j.id === job.id
                        ? {
                            ...j,
                            bullets: j.bullets.map((b, i) =>
                              i === index ? e.target.value : b,
                            ),
                          }
                        : j,
                    ),
                  );
                }}
              />
            </div>
          ))}

          <button type="button" onClick={() => deleteJob(job.id)}>
            Delete
          </button>
        </div>
      ))}

      <button type="button" onClick={addJob}>
        + Add Experience
      </button>
    </fieldset>
  );
}
