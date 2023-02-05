import { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);
  return (
    <>
      <h2>Simple Counter</h2>
      <h2>{value}</h2>
      <button onClick={() => setValue(value - 1)} className="btn">
        Decrease
      </button>
      <button onClick={() => setValue(0)} className="btn">
        Reset
      </button>
      <button onClick={() => setValue(value + 1)} className="btn">
        Increase
      </button>
    </>
  );
}

export default UseStateCounter;
