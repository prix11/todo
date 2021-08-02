import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import ClassComp from './ClassComp';
import { Afcomp } from './Afcomp';
import Comp2 from './Comp2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <App2 name="Den"/>
        <ClassComp />
        <Afcomp />
        <Comp2 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Afdpp.js</code> and save to reload.
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
    </div>
  );
}

export default App;
