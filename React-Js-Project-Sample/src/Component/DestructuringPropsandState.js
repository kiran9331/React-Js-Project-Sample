import React, { Component } from 'react';

// const DestructuringPropsandState = ({name, asa}) => {
//     return (
//         <div>
//             <h1>
//                 Hello I m {name} also known as {asa}
//             </h1>
//         </div>
//     )
// }

class DestructuringPropsandState extends Component{
    render(){
        const {name, asa} = this.props
        return(
            <div>
                <h1>
                    Hello I m {name} also known as {asa}
                </h1>
            </div>
        )
    }
}

export default DestructuringPropsandState