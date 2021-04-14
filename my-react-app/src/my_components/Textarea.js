import React, { Component } from 'react';

class Textarea extends Component {
    constructor(){
        super()
        this.state={
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
            userInput:''
        }
    }
    onChangeHandler=(event)=>{
        const areaName =event.target.value;
        // const areaValue = event.target.value;
        // this.setState({[areaName]:areaValue});
         this.setState({userInput:areaName});
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <textarea onChange={this.onChangeHandler}  placeholder="Your Message" className="m-5 form-control" rows="5" />  
                            <p>{this.state.userInput}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Textarea;