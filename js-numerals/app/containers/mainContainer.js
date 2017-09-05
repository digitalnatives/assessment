import React, {Component} from "react";

const css = require("../styles/styles.css");

let end = 0;
let finalResult = "";

//** very little commenting here. Our algorythm working for in a REACT JS component. In order to keep the things easy, i didnt build an entire file structure, only the neccesary files.
//**by pushing the button first we reduce the margin for mistake (make it as a line and have it max 9 digits)

class Main extends Component {
constructor(props){
  super(props);
  this.state = {text: "", display: "block", displayMSG: "none", displayRes: "block", result: ""};
  this.changeHandler = this.changeHandler.bind(this)
  this.getValue = this.getValue.bind(this)
}
changeHandler(e){
  this.setState({text: e.target.value })
}
getValue(){
  if (isNaN(this.state.text)){
    this.setState({text: "",display:"none",displayMSG:"block", displayRes: "none"});
    setTimeout(function() { this.setState({display: "block", displayMSG: "none", displayRes: "block"});}.bind(this), 2000);
  }
 else if (this.state.text.toString().length > 9){
   this.setState({text: "",display:"none",displayMSG:"block", displayRes: "none"});
   setTimeout(function() { this.setState({display: "block", displayMSG: "none", displayRes: "block"});}.bind(this), 2000);
 }
 else if (this.state.text === "0"){
 this.setState({text: "", result: "zero"})
 }
 else {
   end = Math.round(this.state.text);
   let ott = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred','thousand','million']
   let ottNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000,1000000]
   let minus = 0
   if (end < 0) {minus++}
   let arrNum = end.toString().split("").reverse().map(function(e){return parseInt(e)})
   let lastPart = arrNum.splice(0,3).reverse();
   let middlePart = arrNum.splice(0,3).reverse();
   let begPart = arrNum.splice(0,3).reverse();
   let lastPartReady = [];
   let middlePartReady = [];
   let begPartReady = [];
   let part1 = "";
   let part2 = "";
   let part3 = "";
   function getPart(x,y,scale){
   let lastLength = x.length
   if (lastLength !== 0){
   if (x[lastLength-2] === 1 && x[lastLength-2] !== 0){
     x[lastLength-1] = x[lastLength-1] + 10;
     x.splice(lastLength-2,1)
   } else {
     x[lastLength-2] = x[lastLength-2]*10
   }

   if (lastLength === 3){x.splice(1,0,100)}
   y = x.map(function(e){
     for (var i = 0; i < ottNum.length; i++){
       if (e === ottNum[i]){return ott[i]}
     }})
   y.forEach(function(item, i) { if (item == "zero") y[i] = ""; });
   y.push(scale)
   return y}}
   if (begPart.length != 0){part1 = getPart(begPart,begPartReady,"million").join(" ")}
   if (middlePart.length != 0){part2 = getPart(middlePart,middlePartReady,"thousand").join(" ")}
   part3 = getPart(lastPart,lastPartReady," ").join(" ")
   var ress = part1 + " " + part2 + " " + part3
   let frs = ress.replace(/undefined/g,"")
   let frs2 = frs.replace("thousand  hundred","thousand")
   let frs3 = frs2.replace("million  hundred","million")
   finalResult = frs3.replace("million   thousand","million")
   if (minus != 0){finalResult = "minus" + finalResult}
   this.setState({result: finalResult})
 }
 }
  render(){
    return(
      <div id="Fonts">
      <div style={{display:this.state.display}}>
<input className="InputStyle" type="text" value={this.state.text} onChange={this.changeHandler}/>
<button className="ButtonStyle" onClick={() => this.getValue()}> Get a conversion </button>
</div>
<h1 style={{display:this.state.displayMSG}}> Please give a number with maximum 9 digits. </h1>
<h1 style={{display:this.state.displayRes}}><span id="support"> Your last conversion: </span> {this.state.result} </h1>
      </div>
    )
  }
}

export default Main
