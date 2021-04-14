
import React, { Component } from 'react';

// class Form extends Component {
//     constructor(){
//         super()
//         this.state={
//             name: ""
//         }
//     }

//     takeValue=(event)=>{
//         const nameVal = event.target.value;
//         this.setState({name:nameVal});
//     }

//     render() {
//         return (
//             <div>
//               <div className="container">
//               <div className="row">
//               <div className="col-md-6 mx-auto">
//               <form className="">
//               <p className="m-3 changeResult" >{this.state.name}</p>
//                   <input onChange={this.takeValue} className="form-control mb-2" type="text" placeholder="Your Name"></input>
//                   <input className="form-control btn btn-primary text-uppercase" type="submit" value="Sign Up"></input>
//               </form>
//               </div>
//               </div>
//               </div>
//             </div>
//         );
//     }
// }

// export default Form;


//cought by name property

//Name base input

class Form extends Component {
    constructor(){
        super()
        this.state={
            userName: ""
        }
    }

    takeValue=(event)=>{
        const usrName = event.target.name;
        const usrNamVal = event.target.value;
        this.setState({[usrName]:usrNamVal});
    }
    onSubmitHander=()=>{
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form className="" onSubmit={this.onSubmitHander}>
                            <p className="m-3 changeResult" >{this.state.userName}</p>
                            <input name="userName" onChange={this.takeValue} className="form-control mb-2" type="text" placeholder="Your Name"></input>
                            <input className="form-control btn btn-primary text-uppercase" type="submit" value="Sign Up"></input>
                        </form>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Form;