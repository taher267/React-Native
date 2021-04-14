import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Render_demo extends Component {

    myFunc(){
        const container = document.getElementById('myId');
        const element = "Taher";
        const callback = function() {
            alert('Render or hydrate callback');
        }
        ReactDOM.hydrate(element, container, callback);
    }

    render() {
        return (
            <div>
               <button className='btn btn-secondary' onClick={this.myFunc}>Change</button> 
               <h2 id="myId">My name is Abu Taher</h2>
            </div>
        );
    }
}

export default Render_demo;