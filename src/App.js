import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameCard name="Alice" age="35" gender="female"/>
        <NameCard name="Peter" age="30" gender="male"/>
      </header>
    </div>
  );
}

export default App;
