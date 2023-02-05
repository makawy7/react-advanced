import { useEffect, useState } from "react";

function UseEffectBasics() {
  const [value, setValue] = useState(0);
  const [another, setAnother] = useState(0);
  //  useEffect runs after every re-render (depending on it's dependency list).
  // if dependency list was not passed, it will re-render with any change.
  useEffect(() => {
    if (value > 5) {
      document.title = `New messages ${value}`;
    }
  }, [value]);
  // runs only on inital render and as a side effect of the dependency list.
  useEffect(() => {
    console.log('runs only as a side effect of "another" changings');
  }, [another]);

  // if the dependency list is empty, it will run once after the initial render.
  useEffect(() => {
    console.log("Runs once after the initial render");
  }, []);

  return (
    <>
      <h1>value: {value}</h1>
      <h1>another: {another}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        change value
      </button>
      <button className="btn" onClick={() => setAnother(another + 1)}>
        change another
      </button>
    </>
  );
}

export default UseEffectBasics;
