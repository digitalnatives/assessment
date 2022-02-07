import convertToText from "./util/numberConversion";
import {useState} from "react";
import {Container, Grid} from "@mui/material"
import BackspaceIcon from '@mui/icons-material/Backspace';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import "./style/app.css"

function App() {
    const [inputValue, setInputValue] = useState("");
    const backspaceIcon = <BackspaceIcon/>;
    const infoIcon = <PersonSearchIcon/>;
    const numKeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "i", "0", "backspace"];

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

          <Grid item xs={3}>
              <div className="converted-input-display-container">
                  <h2 id="output">{convertToText(inputValue)}</h2>
              </div>
          </Grid>

          <Grid item>
              <div className="input-container">
                  <input className="input" type="number" min="0" id="input" value={inputValue} onChange={handleChange}/>
              </div>
          </Grid>

          <Grid
              container
              rowSpacing={1}
              columnSpacing={2}
              maxWidth={300}
              marginTop={1}
              alignItems="center">
              {numKeyboard.map((key)=>(
                  <Grid item xs={4} key={key}>
                      <div className="num-key-container" onClick={()=>handleClick(key)}>
                          <h2>{key === "i" ? infoIcon : key === "backspace"? backspaceIcon : key}</h2>
                      </div>
                  </Grid>
              ))}
          </Grid>

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
