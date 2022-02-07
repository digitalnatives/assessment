import {Grid} from "@mui/material";

function Input(props){
    return (
        <Grid item>
            <div className="input-container">
                <input className="input" type="number" min="0" id="input" value={props.inputValue} onChange={props.handleChange}/>
            </div>
        </Grid>
    )
}

export default Input;