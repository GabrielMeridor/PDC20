import React, { Component } from 'react'
import ClassTest from './ClassTest';

export class ClassProps extends Component {
  render() {
    return (
      <div>
        <ClassTest employeename="Juan Dela Cruz" employeeposition="President" company="ABC Company"/>
        <ClassTest employeename="Peter Dela Cruz" employeeposition="Vice President" company="ABC Company"/>
        <ClassTest employeename="John Doe" employeeposition="Manager" company="ABC Company"/>
        
      </div>
    )
  }
}

export default ClassProps