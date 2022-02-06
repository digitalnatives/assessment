import convertToText from "./util/numberConversion";
import {useState} from "react";
import {Container, Grid} from "@mui/material"
import BackspaceIcon from '@mui/icons-material/Backspace';
import "./style/app.css"

function App() {
    const [inputValue, setInputValue] = useState("");
    const backspaceIcon = <BackspaceIcon/>;
    const numKeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "i", "0", "backspace"];

  return (
      <Container maxWidth={"sm"}>
          <Grid container spacing={4}>
              <Grid item>
                  <img src="https://i.imgur.com/E4Q5eZe.png" alt="logo" width={100}/>
              </Grid>
          </Grid>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '30vh' }}>
          <Grid item xs={3}>
              <div className="converted-input-display-container">
                  <h3 id="output">{convertToText(inputValue)}</h3>
              </div>
              <div className="input-container">
                  <input type="number" min="0" id="input" value={inputValue} onChange={handleChange}/>
              </div>
          </Grid>
      </Grid>
          <Grid container spacing={4} alignItems="center">
              {numKeyboard.map((key)=>(
                  <Grid item xs={4} key={key} textAlign={"center"}>
                      <div className="num-key">
                          <a href="#" onClick={()=>handleClick(key)}>{key === "backspace"? backspaceIcon : key}</a>
                      </div>
                  </Grid>
              ))}
          </Grid>
      </Container>
  );

  function handleChange(event) {
      setInputValue(event.target.value)
  }

  function handleClick(key){
      if(key === "backspace"){
          setInputValue(inputValue.slice(0, -1))
      }else{
          setInputValue(inputValue + key)
      }
  }
}

export default App;
