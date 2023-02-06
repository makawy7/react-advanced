import { useState } from "react";

function ControlledInputs() {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople((prev) => [
        ...prev,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      alert("empty value!");
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
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
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={changeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age"> Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.firstName}</h4>
            <p>{item.age}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </article>
    </>
  );
}

export default ControlledInputs;
