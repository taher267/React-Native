import React from 'react';

function Hello(props){
    function doClicked(a) {
        alert(a);
    }
    return(
        <div>
            <button onClick={doClicked.bind(this, 'Function Compt!')}>Click Me!</button>
            <h1>Name: {props.name} and age: {props.age}</h1>
        </div>
    );
}

export default Hello;