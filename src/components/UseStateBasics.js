import { useState } from "react";

function UseStateBasics() {

  const [title, setTitle] = useState("Random Title");
  
  function clickHandler() {
    let newTitle = title === "Random Title" ? "New Title" : "Random Title";
    setTitle(newTitle);
  }

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Change title
      </button>
    </>
  );
}

export default UseStateBasics;
