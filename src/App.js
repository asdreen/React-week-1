import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent label="Click Me" customClass="first-label" />
        <ButtonComponent label="Submit" customClass="second-label" />
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ImageComponent
        url="https://media.istockphoto.com/id/182825867/de/foto/kleiner-ball-gleichgewicht.jpg?s=612x612&w=is&k=20&c=8uAifjz4ZDJDAcjUEuKPNnPMxWmFF9CYogrb7lTE-_o="
        alt="footer"
      />
    </div>
  );
}

export default App;
