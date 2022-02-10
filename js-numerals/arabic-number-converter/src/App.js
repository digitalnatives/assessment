import './App.css';
import Header from "./components/Header";
import NumToChar from "./components/NumToChar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <div className={"content"}>
            <h1>
                Type a number here and check how to write it!
            </h1>
            <NumToChar />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
