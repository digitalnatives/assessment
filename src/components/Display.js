import convertToText from "../util/numberConversion";
import {Grid} from "@mui/material";

function Display(props){
    return (
        <Grid item xs={3}>
            <div className="converted-input-display-container">
                <h2 id="output">{convertToText(props.inputValue)}</h2>
            </div>
        </Grid>
    )
}

export default Display;