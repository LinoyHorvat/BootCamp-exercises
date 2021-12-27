import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setQuery] = useState("hooks");
  const [seachValue, setSeachValue] = useState(null);

  // const handleData = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(
  //     `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
  //   );
  //   setMyData(data.hits);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   handleData();
  // }, []);

  const updateSearch = () => {
    setSeachValue(searchQuery);
  };

  useEffect(() => {
    const handleData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
      );
      setMyData(data.hits);
      setLoading(false);
    };

    handleData();
  }, [seachValue]);

  const createData = () => {
    return (
      <ul>
        {myData.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <label>Search :</label>
      <input onChange={(e) => setQuery(e.target.value)} type="text" />
      <button onClick={updateSearch}>Submit</button>
      {isLoading ? <div>Loading......</div> : createData()}
    </>
  );
}

export default App;
