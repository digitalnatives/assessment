import React, { Component } from 'react';

const maxLength = 9
const invalidInput = ['-', '.', 'e']

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: -1,
      error: "",
      output: "",
    };
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>Number to words converter</h1>
        </div>
        <div className="center">
          <input onChange={this.handleChangeInput}
            onKeyDown={(evt) => invalidInput.includes(evt.key) && evt.preventDefault()}
            id="input" className="inputField" type="number"
            max="999999999" min="1" />
          <button id="submitButton" onClick={this.calcOutput}>Convert</button>
        </div>
        <div className="center" >
          <h2 id="output">{this.state.error}{this.state.output}</h2>
        </div>
      </div>
    );
  }

}

export default App;
