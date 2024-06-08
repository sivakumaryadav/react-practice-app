import React, { Component } from 'react'

export class EventBind extends Component {
    constructor () {
        super();
        this.state = {
            message : "Hello"
        }
        // 3rd approach 
        this.evntHandler = this.evntHandler.bind(this);
    }
    evntHandler() {
        this.setState( {
            message : 'Good Bye'
        })
        console.log(this)
    }

    eventHandler = () => {
        this.setState( {
            message : 'Good Bye'
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        {this.state.message} <br/>
        {/* Best approach is 3rd and 4th 
            4th approach is new one
        */}
         {/* 1.EventBind approach */}
        <button onClick={this.evntHandler.bind(this)}>1st Click</button>
         {/* 2 approach */}
        <button onClick={() => this.evntHandler()} >2nd Click</button>
         {/* 3 approach and also need to add the bind method assignment in after constructor. */}
        <button onClick={this.evntHandler}>3rd Click</button>
        {/* 4 approach is writing the arrow function and call */}
        <button onClick={this.eventHandler}>4th Click</button>
      </div>
    )
  }
}

export default EventBind