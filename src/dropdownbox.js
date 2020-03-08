import React, { Component } from 'react'
import './App.css'
export class dropdownbox extends Component {
    render() {
        return (
            
            <select className = "dropdown2">
                <option value = "Type">Type</option>
                <option value = "1">Cm</option>
                <option value = "2">Inch</option>
                <option value = "3">Yard</option>
                <option value = "4">Feet</option>
            </select>
        )
    }
}

export default dropdownbox
