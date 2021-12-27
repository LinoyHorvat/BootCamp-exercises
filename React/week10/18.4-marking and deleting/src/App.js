import "./App.css";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

const dataObjects = ["one", "two", "three", "four", "five"];
const dataStates = [false, false, false, false, false]

function App() {
  const [data, setData] = useState(dataObjects);
  const [statuses, setDataStates] = useState(dataStates);

  const handleStatuses = (name) => {
    const idx = data.indexOf(name)
    const copyStatuses = [...statuses]
    copyStatuses[idx] = !copyStatuses[idx]
    setDataStates(copyStatuses)
  }
  const handleDelete = () => {
    const copyData = [...data] 
    const filterdData = copyData.filter((_,idx) => statuses[idx] === false)
    setData(filterdData)

  };
  const handleReset = () => {
    setData(dataObjects);
  };

  return (
    <div>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReset}>Reset</button>
      {data.map((name, idx) => {
        return (
          <div key={name}>
            <Checkbox
              name={name}
              handleStatuses = {handleStatuses}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
