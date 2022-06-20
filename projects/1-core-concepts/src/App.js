import logo from "./logo.svg";
import "./App.css";
import FunctionalComp from "./components/FunctionalComp";
import ClassComp from "./components/ClassComp";
import ClassPureComp from "./components/ClassPureComp";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            Components
            <ul>
                <li>
                    <FunctionalComp />
                </li>
                <li>
                    <ClassComp />
                </li>
                <li>
                    <ClassPureComp />
                </li>
            </ul>
            <img src={logo} className="App-logo" alt="logo" />
            <div>t1</div>
            <div>{true}</div>
            <div>{false}</div>
            <div>{null}</div>
            <div>{undefined}</div>
            <div>{JSON.stringify({})}</div>
            <div>t5</div>
            {/* <header className="App-header">
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
      </header> */}
        </div>
    );
}

export default App;