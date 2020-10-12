import React, { Component } from 'react';
import Particles from 'react-particles-js';

const maxLength = 9
const invalidInput = ['-', '.', 'e']
const particleOptions = {
  particles: {
    size: {
      value: 8,
      random: true,
    },
    line_linked: {
      color: "00ff00",
      opacity: 1,
    },
    number: {
      value: 3,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: 0,
      error: "",
      output: "",
      practicles: 10
    };
  }

  handleChangeInput = event => {
    let value = event.target.value;
    if (value[0] === '0') {
      value = value.slice(1, value.length)
    }
    const message = value.slice(0, maxLength);
    event.target.value = message;
    if (value.length > maxLength) {
      this.setState({ error: "The maximum length of input is 9 digits" })
    } else {
      this.setState({ input: message, error: "" })
    }
  }

  calcOutput = () => {
    const num = this.state.input

    //Adding some visualization to the number
    let practicleNumber = 3
    let set = ""
    if (num > 0) {
      set = "seven"
      practicleNumber = num.length * 10 + parseInt(num[0])
     
    }
    this.setState({ output: set, practicles: practicleNumber })
  }

  render() {
    let validOutput = "center outputBox "
    validOutput += (this.state.error || this.state.output)?"visible":"hidden"
    return (
      <div>
        <Particles params={particleOptions} params={{ "particles": { "number": { "value": this.state.practicles } } }} className="particles" />
        <div className="center">
          <h1>Number to words converter</h1>
        </div>
        <div className="center">
          <input onChange={this.handleChangeInput}
            onKeyDown={(evt) => invalidInput.includes(evt.key) && evt.preventDefault()}
            id="input" className="inputField darkBG" type="number"
            max="999999999" min="1" />
          <button className="darkBG"id="submitButton" onClick={this.calcOutput}>Convert</button>
        </div>
        <div className={validOutput}>
          <h2 id="output">{this.state.error}{this.state.output}</h2>
        </div>
      </div>
    );
  }

}

export default App;
