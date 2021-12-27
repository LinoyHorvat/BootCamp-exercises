import "./App.css";
import { useState } from "react";

const dataObjects = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

function App() {
  const [data, setData] = useState(dataObjects);

  const handleStatus = (idx) => {
    const dataCopy = [...data];
    dataCopy[idx].completed = !data[idx].completed;
    setData(dataCopy);
  };

  return (
    <div className="App">
      {data.map((item, idx) => {
        const style = {
          textDecoration: item.completed ? "line-through" : "none",
        };
        return (
          <div key={item.name}>
            <div style={style} className={`title`}>
              {item.name}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleStatus(idx)}
              >
                {item.completed ? "🎅" : "🍤"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
