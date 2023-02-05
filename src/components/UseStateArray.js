import { useState } from "react";
import { data } from "../data";

function UseStateArray() {
  const [people, setPeople] = useState(data);

  function singleDelete(id) {
    setPeople(people.filter((p) => p.id !== id));
  }
  return (
    <>
      {people.map((item) => (
        <div className="item" key={item.id}>
          <h4>{item.name}</h4>
          <button onClick={() => singleDelete(item.id)}>Remove</button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        Delete all
      </button>
    </>
  );
}

export default UseStateArray;
