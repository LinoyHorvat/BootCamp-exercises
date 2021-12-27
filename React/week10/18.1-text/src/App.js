import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Box
        text={
          "@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$@$$$$$$$$"
        }
        maxLength={15}
      />
    </div>
  );
}

export default App;
