import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState(null);
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false)

  const handleApi = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/weather?address=${country}`
    );
    setData(data);
    console.log(data);
  };

  return (
    <div className="App">
    <input onChange={(e) => setCountry(e.target.value)} type="text" />
    <button onClick={handleApi}>Submit</button>
    {data &&
      <div>
      <h1>address: {data.address}</h1>
      <h1>forecast: {data.forecast}</h1>
      <h1>location: {data.location}</h1>
      </div>
    }
    </div>
  )
}

export default App;
