import { useEffect, useState } from "react";

function UseEffectBasics() {
  const [value, setValue] = useState(0);
  //   useEffect runs after every re-render
  useEffect(() => {
    document.title = `New messages ${value}`;
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
}

export default UseEffectBasics;
