import "./App.css";
import { useState } from "react";

function App() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const handleTime = (target) => {
    const temp = {};
    if (target.name === "seconds") {
      temp.seconds = target.value;
      temp.minutes = target.value / 60;
      temp.hours = target.value / 3600;
    } else if (target.name === "minutes") {
      temp.seconds = target.value * 60;
      temp.minutes = target.value;
      temp.hours = target.value / 60;
    } else {
      temp.seconds = target.value * 3600;
      temp.minutes = target.value * 60;
      temp.hours = target.value;
    }
    setTime(temp);
  };

  return (
    <div className="App">
      <label>Seconds</label>
      <input
        name="seconds"
        type="text"
        value={time.seconds}
        onChange={(e) => handleTime(e.target)}
      />
      <label>Minutes</label>
      <input
        name="minutes"
        type="text"
        value={time.minutes}
        onChange={(e) => handleTime(e.target)}
      />
      <label>Hours</label>
      <input
        name="hours"
        type="text"
        value={time.hours}
        onChange={(e) => handleTime(e.target)}
      />
    </div>
  );
}

export default App;
