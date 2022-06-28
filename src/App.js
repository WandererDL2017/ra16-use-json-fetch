import './App.css';
import Hook from "./components/Hook";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul className="list">
          <Hook url={process.env.REACT_APP_DATA_URL} />
          <Hook url={process.env.REACT_APP_ERROR_URL} />
          <Hook url={process.env.REACT_APP_LOADING_URL} />
        </ul>
      </div>
    </div>
  );
}

export default App;