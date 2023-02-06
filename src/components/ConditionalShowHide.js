import { useState, useEffect } from "react";

function ConditionalShowHide() {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  function resizeHandler() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item width={width} />}
    </>
  );
}

function Item({ width }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Window Width:</h2>
      <h2>{width} px</h2>
    </div>
  );
}

export default ConditionalShowHide;
