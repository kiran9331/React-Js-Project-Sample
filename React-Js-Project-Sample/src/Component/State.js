import React, { Component } from 'react';

class State extends Component{

    constructor(){
        super()
        this.state = {
            message: 'This is State'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage()}>Set State</button>
            </div> 
        )
    }
}

export default State