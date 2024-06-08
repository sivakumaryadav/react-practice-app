import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent : 'This is from Parent'
      }
      this.evntHandlr = this.eventHandlr.bind(this)
    }

    eventHandlr (childMessage) {
      alert (`Hello from ${childMessage}`)
    }

  render() {
    return (
      <div>{this.state.parent} <br/>
      <ChildComponent parentHandler = {this.eventHandlr}/>
      </div>
    )
  }
}

export default ParentComponent