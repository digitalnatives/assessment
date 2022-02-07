import {Grid} from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
const numKeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "i", "0", "backspace"];
const backspaceIcon = <BackspaceIcon/>;
const infoIcon = <PersonSearchIcon/>;

function Numpad(props){
    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={2}
            maxWidth={300}
            marginTop={1}
            alignItems="center">
            {numKeyboard.map((key)=>(
                <Grid item xs={4} key={key}>
                    <div className="num-key-container" onClick={()=>props.handleClick(key)}>
                        <h2 className="num-key">{key === "i" ? infoIcon : key === "backspace"? backspaceIcon : key}</h2>
                    </div>
                </Grid>
            ))}
        </Grid>
    )
}

export default Numpad