import React, { Component } from 'react';
import Particles from 'react-particles-js';

//used to resctrict the input field
const maxLength = 24    //change the regex function in convertToWord() function, and the "c" array if you change this number
const invalidInput = ['-', '.', 'e']

//used for conversion
const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const c = ['', 'sextillion', 'quintillion', 'quadrillion', 'trillion', 'billion', 'million', 'thousand', '']

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: 0,
      error: "",
      output: "",
      practicles: 3
    };
  }
  componentDidCatch(error, info) {
    this.setState({ error: "It seems we ran into an error: " + error.toString(), output: "" })
  }

  handleChangeInput = event => {
    let value = event.target.value;
    if (value[0] === '0') {
      value = value.slice(1, value.length)
    }
    const message = value.slice(0, maxLength);
    event.target.value = message;
    if (value.length > maxLength) {
      this.setState({ error: "The maximum length of input is " + maxLength + " digits", output: "" })
    } else {
      this.setState({ input: message, error: "" })
    }
  }

  convertToWord(x) {
    const n = ('0'.repeat(maxLength) + x).substr(-maxLength).match(/^(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})$/); let str = '';
    for (let i = 1; i < maxLength / 3 + 1; i++) {
      const tmp = (n[i][1] + n[i][2]);
      str += (str !== '') ? ', ' : '';
      str += (n[i][0] !== "0") ? (a[Number(n[i][0])] + 'hundred ' + ((tmp !== '00') ? 'and ' : '')) : '';
      str += (tmp !== "00") ?
        ((tmp[0] !== "1") ?
          (b[n[i][1]] + ' ' + a[n[i][2]]) + c[i] :
          (a[Number(tmp)] + c[i]))
        : '';
    }
    return str;
  }
  calcOutput = () => {
    const num = this.state.input
    //Adding some visualization to the number
    let practicleNumber = 3
    if (num > 0) {
      practicleNumber = Math.min(num.length * 5 + parseInt(num[0]) / 2, 100)
      //since we have a convertible number, we update the state with the words
      this.setState({ output: this.convertToWord(num), practicles: practicleNumber, error: "" })
    }
  }

  render() {
    const validOutput = "center outputBox " + ((this.state.error || this.state.output) ? "visible" : "hidden")
    //connecting state to Particles
    const particleOptions = {
      particles: {
        size: {
          value: 8,
          random: true,
        },
        line_linked: {
          color: "#00ff00",
          opacity: 1,
        },
        number: {
          value: this.state.practicles,
          density: {
            enable: true,
            value_area: 200
          }
        }
      }
    }
    return (
      <div>
        <Particles params={particleOptions}
          className="particles" />
        <div className="center">
          <h1>Number to words converter</h1>
        </div>
        <div className="center">
          <input onChange={this.handleChangeInput}
            //the below line is neccesary to prevent unwanted characters in the input
            onKeyDown={(evt) => invalidInput.includes(evt.key) && evt.preventDefault()}
            id="input" className="inputField darkBG" type="number" min="1" max={"9".repeat(maxLength)} />
          <button className="darkBG" id="submitButton" onClick={this.calcOutput}>Convert</button>
        </div>
        <div className={validOutput}>
          <h2 id="output center">{this.state.error}{this.state.output}</h2>
        </div>
      </div>
    );
  }
}

export default App;