import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myJoke, setMyJoke] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    setCategoryData(data);
    setLoading(false);
  }, []);

  const createCategory = () => {
    return categoryData.map((category, i) => {
      return (
        <div key={i}>
          <button
            onClick={() => {
              getJokeFromCategory(category);
            }}
          >
            {category}
          </button>
        </div>
      );
    });
  };

  const getJokeFromCategory = async (category) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    setMyJoke(data.value);
    console.log(data.value);
    setLoading(false);
  };

  const showListOfJokes = () => {
    {
      return searchValue.map((joke) => {
        return <li key={joke.value}>{joke.value}</li>;
      });
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${inputValue}`
    );
    console.log(data.result);
    setSearchValue(data.result);
    setLoading(false);
  };

  return (
    <>
      {categoryData && createCategory()}
      {isLoading ? <div>Loading...🍤</div> : <div>{myJoke}</div>}
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSearch}>🍤</button>
      {searchValue && <ul>{showListOfJokes()}</ul>}
    </>
  );
}

export default App;
