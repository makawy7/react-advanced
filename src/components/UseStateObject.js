import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "Abdallah",
    age: 29,
    message: "random message",
  });
  const ageHandler = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const messageHandler = () => {
    setPerson({ ...person, message: "Hi " + person.name });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={ageHandler}>
        Increment age
      </button>
      <button className="btn" onClick={messageHandler}>
        Change message
      </button>
    </>
  );
}

export default UseStateObject;
