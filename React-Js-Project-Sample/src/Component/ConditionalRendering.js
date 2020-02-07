import React, { Component } from 'react';

class ConditionalRendering extends Component {

    constructor() {
        super()

        this.state = {
            isloggedIn: true // Change into true or false of output with conditionally
        }
    }

    render() {

        // ******************   1. If Else Condition   ******************

        // if(this.state.isloggedIn){
        //     return <div>Welcome Programmer</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // ******************   2. Element Declaration  ******************

        // let message
        // if(this.state.isloggedIn){
        //     message = <div>Welcome Programmer</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // ******************    3. ternary conditional   ******************

        // return (
        //     this.state.isloggedIn ? <div>Welcome Programmer</div> : <div>Welcome Guest</div>
        // )

        // ******************    4. short circuit operator   ******************

            return this.state.isloggedIn && <div>Welcome Programmer</div>

        // ******************    5. Normal Display   ******************

        // return(
        //     <div>
        //         Welcome Programmer
        //     </div>
        // )
    }
}

export default ConditionalRendering