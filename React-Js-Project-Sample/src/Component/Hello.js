
import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello with funtion</h1>
    //     </div>
    // )

    // return React.createElement('div', null, '<h1>This is inside h1 tag</h1>');
    return React.createElement('div', {id: "divId", className: "divClass"}, React.createElement('h1', { id: "childid", className: "childclass"} , 'This is inside h1 tag'))
}


export default Hello