import {useState} from "react";
import {Container, Grid} from "@mui/material";
import "./style/app.css";
import Input from "./components/Input";
import Display from "./components/Display";
import Numpad from "./components/Numpad";

function App() {
    const [inputValue, setInputValue] = useState("");

  return (
      <Container maxWidth={"sm"}>
          <div className={"main-container"}>
      <Grid container
            spacing={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '60vh' }}>

          <Grid item>
              <img src="https://i.imgur.com/E4Q5eZe.png" alt="logo" width={100}/>
          </Grid>

          <Display inputValue={inputValue}/>
          <Input handleChange={handleChange} inputValue={inputValue}/>
          <Numpad handleClick={handleClick}/>

      </Grid>
          </div>
      </Container>
  );

  function handleChange(event) {
      setInputValue(event.target.value)
  }

  function handleClick(key){
      if(key === "backspace"){
          setInputValue(inputValue.slice(0, -1))
      }else if(key === "i"){
          window.open("https://github.com/pappbence15")
      }else{
          setInputValue(inputValue + key)
      }
  }
}

export default App;
