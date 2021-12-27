import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSeachValue] = useState("");

  useEffect(() => {
    handleData();
  }, []);
  const handleData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setMyData(data);
      setLoading(false);
    } catch (error) {}
  };

  const createData = () => {
    return myData
      .filter((country) => {
        if (searchValue === "") {
          return country;
        } else if (
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return country;
        }
      })
      .map((country) => {
        return <div key={country.name}>{country.name}</div>;
      });
  };

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSeachValue(e.target.value);
        }}
      />
      <div className="App">
        {loading ? <div>Loading...</div> : createData()}
      </div>
    </>
  );
}

export default App;
