import { useState } from "react";

function ControlledInputs() {
  const [person, setPerson] = useState({ id: "", firstName: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      setPeople((prev) => [
        ...prev,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ id: "", firstName: "", email: "" });
    } else {
      alert("empty value!");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName"> Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={(e) =>
                setPerson({ ...person, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.firstName}</h4>
            <p>{item.email}</p>
          </div>
        ))}
      </article>
    </>
  );
}

export default ControlledInputs;
