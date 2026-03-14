import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>This is app</h1>
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
}

export default App;
