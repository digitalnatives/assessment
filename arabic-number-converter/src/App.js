import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NumToChar from "./components/NumToChar";

function App() {
  return (
    <div className="App">
        <Header />
        <div className={"content"}>
            <h1>Type a number here to check how to write it!</h1>
            <NumToChar />
        </div>
    </div>
  );
}

export default App;
