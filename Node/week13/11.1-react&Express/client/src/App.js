import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  useEffect= () => {
    const handleApi = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/weather?address=boston"
      );
      console.log(data);
    };
    handleApi();
  }
  return (
    <div className="App">
     hello world
    </div>
  )
}

export default App;
