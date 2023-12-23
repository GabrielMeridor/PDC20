import React, { Component } from 'react'
import '../App.css'

export class ClassTest extends Component {
  render() {


    return (
    <div>
        <h1>{this.props.employeename}</h1>
        <h3>{this.props.employeeposition}</h3>
        <p className="label">{this.props.company}</p>
        <button type="button" class="btn btn-danger">Edit</button>
    </div>
    )
  }
}

export default ClassTest