import { useState } from "react";
import { data } from "../data";

function PropDrilling() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((p) => p.filter((person) => person.id !== id));
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} remove={removePerson} />
    </section>
  );
}

function List({ people, remove }) {
  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} remove={remove} />
      ))}
    </>
  );
}

function SinglePerson({ id, name, remove }) {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => remove(id)}>delete</button>
    </div>
  );
}

export default PropDrilling;
