import React, { Component } from 'react'
import './App.css'
import Unit from './measurementValues'
import configure from './configuration/serviceconfig'
export default class dropdown extends Component {
    constructor(props){
    super(props)
    this.state = {
        unit:"",
        firstUnit: "",
        secondUnit:"",
        unitValue:"0",
        result:"0"
     };
    }

    getUnit = event =>{
        this.setState({unit:event.target.unit});
        
    }

    getValue = (event) => {
        this.setState({ unitValue: event.target.value });

    }


    buttonClick = () => {
        var data = {
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue: this.state.unitValue
        }
        configure(data)
        .then(response => {
            console.log("success  ", response.data);
            this.setState({ result: response.data.data})
        }).catch((err) => {
            console.log("Something went wrong")
        })
}

    handleFirstUnit = (val) => {
        this.setState({ firstUnit: val })

    }

    handleSecondUnit = (val) => {
        this.setState({ secondUnit: val })
    }
    render() {
        return (
            <div className = "selectDiv">
            <select className = "firstdropdown" onChange={this.getUnit}>
                <option value = "Units"> Select Type </option>
                <option value = "0"> Length </option>
                <option value = "1"> Volumn </option>
                <option value = "2"> Mass </option>
                <option value = "3"> Temperature </option>
            </select>
            <div className = "dropdownboxx">
                <Unit unit = {this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit} />
            </div>
            <div className = "textboxes">
            <input className = "inputbox1" type = "text" name = "name" placeholder="enter value" onChange={this.getValue}/>
            <label> = </label>
            <input className = "inputbox2" type = "text" name = "name" placeholder="enter value" value={this.state.result}/>
            </div>
            <div className = "submitbutton">
                <button type="button" onClick={this.buttonClick}>convert</button>
            </div>
            </div>
        )
    }
}

