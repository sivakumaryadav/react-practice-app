import React, {Component} from "react";

class ConstructorSample extends Component {
    constructor() {
        super()
        this.state ={
            message : 'Hello message from Sample Constructor Example.'
        }
    }

    handleSubscribe (){
        this.setState({
            message : 'Thanks for Subscribe...'
        })
    }

    render() {
        console.log(this.state.message);
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleSubscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default ConstructorSample;