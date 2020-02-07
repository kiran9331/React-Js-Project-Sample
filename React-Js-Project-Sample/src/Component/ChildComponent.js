import React from 'react';

function ChildComponent(props){
    return(
        <div>
            <button onClick={ () => props.greetHandler('child')}>Parent Component</button>
        </div>
    )
}

export default ChildComponent