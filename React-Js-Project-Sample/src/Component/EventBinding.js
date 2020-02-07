import React, { Component } from 'react';

class EventBinding extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.clickBinding = this.clickBinding.bind(this);
    }

    clickBinding(){
        this.setState({
            message: 'GoodBye..!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickBinding.bind(this)}>Event Binding</button> */}
                {/* <button onClick={ () => this.clickBinding()}>Event Binding</button> */}
                <button onClick={this.clickBinding}>Event Binding</button>
            </div>
        )
    }
}

export default EventBinding