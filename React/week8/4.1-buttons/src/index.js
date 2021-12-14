// import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Btn from "./Btn.js"


// create a react component
const App = () => {
return (
  <div>
  <Btn text = "Important"/>
  <Btn text = "Not Important"/>
  </div>
)
};

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
  document.getElementById('root')
);