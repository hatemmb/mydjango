import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <div className="center-column">
        <div className="item-row">
          <span>One</span>
        </div>
        <div className="item-row">
          <span>Two</span>
        </div>
        <div className="item-row">
          <span>Three</span>
        </div>

      </div>
    </div>
  );
}

export default App;
