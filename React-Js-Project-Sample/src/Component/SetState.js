import React, { Component } from 'react'

class SetState extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    Increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => { console.log("INCREMENT CALLBACK VALUE => " ,this.state.count) });

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log("INCREMENT => ", this.state.count);
    }

    render() {
        return (
            <div>
                <br/>
                 <div>this is setState Component--- Count <b className="fts30">{this.state.count}</b></div>
                 <br/>
                 <button onClick={ () => this.Increment()}>Increment</button>
            </div>
        )
    }
}

export default SetState
