import React, { Component } from 'react'

class StateExample extends Component {

    constructor () {
        super();
        this.state = {
            count : 0
        }
    }

    increment() {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement () {
        this.setState({
            count : this.state.count - 1
        })
    }
  render() {
    return (
      <div>
        Count : {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default StateExample