
import React from 'react';

const Props = (props) => { 
    return (
        <div>
            <h1>Hello my name is {props.name} and I m a {props.developer}</h1>
            {props.children}
        </div>
    )
}

export default Props