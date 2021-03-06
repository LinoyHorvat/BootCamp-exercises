import "./App.css";
import { useState } from "react";
import Checkbox from "./components/Checkbox";



function App() {
  const [data, setData] = useState(dataObjects);
  const [statuses, setDataStates] = useState(dataStates);



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
