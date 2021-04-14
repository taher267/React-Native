import React, {Component} from 'react';

class Welcome extends Component{
    funcClick(e){
        alert(e);
    }
    render(){  

        return <div>
            <button onClick={this.funcClick.bind(this, "Class Component")}>Click</button>
            <h1>I'm from {this.props.name} and age: {this.props.age}</h1>
        </div>
    }
}

export default Welcome;