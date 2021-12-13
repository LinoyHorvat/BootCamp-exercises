// import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  const data = ["hello", " world"];
  const num1 = 5; 
  const num2 = 6; 
  const string = "I love React!";
  return (
    <div>
    {data}
    <div>
    {num1} + {num2} = {num1 + num2}
    </div>
    <div>
    The string’s length is {string.length} characters
    </div>
    </div>
  )
};

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
  document.getElementById('root')
);