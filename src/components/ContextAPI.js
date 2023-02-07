import { createContext, useContext, useState } from "react";
import { data } from "../data";

const PeopleContext = createContext();

function ContextAPI() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((p) => p.filter((person) => person.id !== id));
  };
  return (
    <PeopleContext.Provider value={{ people, remove: removePerson }}>
      <section>
        <h3>Context API</h3>
        <List />
      </section>
    </PeopleContext.Provider>
  );
}

function List() {
  const { people } = useContext(PeopleContext);
  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} />
      ))}
    </>
  );
}

function SinglePerson({ id, name }) {
  const { remove } = useContext(PeopleContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => remove(id)}>delete</button>
    </div>
  );
}

export default ContextAPI;
