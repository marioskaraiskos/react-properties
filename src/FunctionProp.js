import React from 'react';
function FunctionProp(props) {
    return (
        <div>
            <h3>This is a functional component</h3>
            <h3>Hello {props.name}! from {props.place}</h3>
        </div>
    )
}

export default FunctionProp;