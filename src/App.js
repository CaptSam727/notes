// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <div className="main">
      {/* <header className="App-header">
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
      </header> */}
      <Header />
      <Notes />
    </div>
  );
}

export default App;
