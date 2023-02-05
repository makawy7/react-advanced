import { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>first: {firstValue}</h1>
      <h1>second: {secondValue}</h1>
    </>
  );
}
export default ShortCircuit;
