
import React, { Component } from 'react';

class EventHandling extends Component{

    displayMessageOnConsole() {
        console.log("Button Clicked");
    }

    render(){
        return(
            <div>
                <button onClick={this.displayMessageOnConsole}>Event Handling</button>
            </div>
        )
    }
}

export default EventHandling