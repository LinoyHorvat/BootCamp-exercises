import React, {Component} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
// import Player from './Player'

class App extends Component {
  state = {
    joke: null,
    categories: [],
    jokeCategory: null
  };
  
  getJoke = async() => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
    this.setState({joke: data.value});
  }
  getCategories = async() => {
    const {data} = await axios.get(`https://api.chucknorris.io/jokes/categories`);
    this.setState({categories: data});
  }
  getJokeCategories = async(category) => {
    const {data} = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    this.setState({jokeCategory: data.value});
  }

  renderCategories = () => {
    return this.state.categories.map((category, i) => {
      return (
        <div key={i} style={{display: 'flex'}}>
        <button onClick={() => {this.getJokeCategories(category)}}>{category}</button>
        </div>
        )});
  }

  

  render() {
    return (
      <div>
      <button onClick={this.getJoke}>Click to Get a Joke</button>
      <div>{this.state.joke}</div>
      <button onClick={this.getCategories}>Click to Get Jokes Categories</button>
      {this.state.categories && this.renderCategories()}
      <div>{this.state.jokeCategory}</div>
      </div>
    )
  }
}

export default App;

