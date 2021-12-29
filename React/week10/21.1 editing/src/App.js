import "./App.css";
import react, { useState, useEffect, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const btnTitleRef = useRef("edit");
  const inputRef = useRef();

  useEffect(() => {
    if (toggle) {
      inputRef.current.focus();
      btnTitleRef.current = "edit";
    } else {
      btnTitleRef.current = "save";
    }
  }, [toggle]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>{btnTitleRef.current}</button>
      {toggle && <input type="text" ref={inputRef} />}
    </div>
  );
}

export default App;
