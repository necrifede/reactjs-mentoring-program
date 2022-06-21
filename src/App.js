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
        </div>
    );
}

export default App;
