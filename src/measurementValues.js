import React from "react";
import "./App.css";
import jsonfile from "../src/measurementUnits.json";
import configuration from "./configuration/serviceconfig"

var unitType;

 class Dropdownvalues extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    type: props.unit ,
    firstUnit:'FEET',
    secondUnit:'FEET',
    Value1:props.Value1,
    Value2:props.Value2
};
console.log('first Unit---->',);

  }
  getUnit = event => {

    this.setState({ unit: event.target.value });
}

  componentWillReceiveProps(props) {
    this.setState({ type: props.unit });
  }

  handleFirstUnitChange = (event) => {

    console.log("handle change--> ", event.target.value);
    this.setState({ firstUnit: event.target.value })
    this.props.firstUnit(event.target.value )
}

handleSecondUnitChange = (event) => {
    console.log("handle change--> ", event.target.value);
    this.setState({ secondUnit: event.target.value })
    this.props.secondUnit(event.target.value )
}

  render() {
    var empty = " ";
    var type = this.state.type;
    var keys = Object.keys(jsonfile);
    console.log('sdfgnjm,.---->',keys);
    
    for (var i = 0; i < keys.length; i++) {
      if (type == i) {
        console.log('typeeeeeeeee---->',type);
        console.log('value of i------------>',i);
        unitType = Object.keys(jsonfile[keys[i]]);
        console.log('asdfhjk----->',unitType);
        
      }
    }
    return (  
      <div className ="childDrop">
        <select className="dropdown" 
        onChange={(event) => this.handleFirstUnitChange(event)}>
          <option value="N/A">TYPES</option>
          <option value="{unitType[0]}">{unitType[0]}</option>
          <option value="{unitType[1]}">{unitType[1]}</option>
          <option value="{unitType[2] || empty}">{unitType[2] || empty}</option>
          <option value="{unitType[3] || empty}">{unitType[3] || empty}</option>
        </select>
        <label id="labels">&#x21c4;</label>
        <select className="dropdown" onChange={(event) => this.handleSecondUnitChange(event)}>
          <option value="N/A">TYPES</option>
          <option value="{unitType[0]}">{unitType[0]}</option>
          <option value="{unitType[1]}">{unitType[1]}</option>
          <option value="{unitType[2] || empty}">{unitType[2] || empty}</option>
          <option value="{unitType[3] || empty}">{unitType[3] || empty}</option>
        </select>
      </div>
    );
  }
}
export default Dropdownvalues