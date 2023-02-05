import { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
    //   setValue(value + 1);
      setValue((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
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
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h2>{value}</h2>
        <button onClick={complexIncrease} className="btn">
          Increase later
        </button>
      </section>
    </>
  );
}

export default UseStateCounter;
