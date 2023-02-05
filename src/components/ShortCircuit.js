import { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>first: {firstValue}</h1>
      <h1>second: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h1 style={{ marginTop: "10px" }}>{isError && "Error"}</h1>
      {isError ? (
        <p>there's an error ...</p>
      ) : (
        <div>
          <h2>there's no error</h2>
        </div>
      )}
    </>
  );
}
export default ShortCircuit;
