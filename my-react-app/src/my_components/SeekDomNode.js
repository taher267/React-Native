import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class SeekDomNode extends Component {
    changeImg(){
        const imgID = document.querySelector('#imgId');
        ReactDOM.findDOMNode(imgID).src="https://images.unsplash.com/photo-1617089398472-3dc8b1e7e11e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";
    }
    render() {
        return (
            <div>
                <button onClick={this.changeImg}>Image</button>
                <img id="imgId" src="https://images.unsplash.com/photo-1617103650310-7f2e1500eae4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"></img>

            </div>
        );
    }
}

export default SeekDomNode;