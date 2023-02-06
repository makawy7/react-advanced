import { useEffect, useRef } from "react";

// useRef
// preserves a value between re-renders
// useRef doesn't trigger re-render
// target DOM nodes/elements

function UseRefBasics() {
  // saves the value between re-renders
  const myInputRef = useRef(null);
  const myH2Ref = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(myInputRef.current.name, myInputRef.current.value);
    console.log(myH2Ref.current);
  }
  useEffect(() => {
    myInputRef.current.focus();
  });
  // console.log(myInputRef);
  return (
    <>
      <h2 ref={myH2Ref}>Hello World!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input name="email" type="text" ref={myInputRef} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}

export default UseRefBasics;
