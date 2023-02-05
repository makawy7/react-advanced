import { useEffect, useState } from "react";

function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // cleanup function runs after the useEffect, so useEffect runs after the re-render and the cleanup runs afterwards.
  // so we should remove the event listener when the re-render is over, otherwise event listeners will add up.
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  // another way to do this, is to add the event listener only once after the initial render
  // so we pass an empty array of dependency list
  //   useEffect(() => {
  //     window.addEventListener("resize", checkSize);
  //     return () => {
  //       window.removeEventListener("resize", checkSize);
  //     };
  //   }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
}

export default UseEffectCleanup;
