import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super();
        this.state={
            fName: "",
            lName: "",
            email: "",
            phoneNo: "",
        }
    }
    onSubmigHandler=()=>{
        alert(this.state.fName + this.state.lName);
    }
    onChangeHandler=(event)=>{
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.setState({[inputName]:inputValue});

        if (inputName==='fName') {
            const namePattern = /^([a-zA-Z,.]){2,20}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fName:"First Name is Invalid!"});
            }
        }

        if (inputName==='lName') {
            const namePattern = /^([a-zA-Z,.]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({lName:"Last name is Invalid!"});
            }
        }
        if (inputName==='email') {
            const emailPattern = /\S+\.\S/;
            if (!emailPattern.test(inputValue)) {
                this.setState({email:"Last name is Invalid!"});
            }
        }
        // if (inputName==='phoneNo') {
        //     if (!Number(inputValue)) {
        //         this.setState({phoneNo:"Phone No is Invalid!"})
        //     }
        // }

        if (inputName==='phoneNo') {
            const phonePattern = /^([0-9,+]){11,14}$/;
            if (!phonePattern.test(inputValue)) {
                this.setState({phoneNo:"Last name is Invalid!"});
            }
        }
    }
   
    render() {
        return (
            <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={this.onSubmigHandler}>
                            <h3 className="text-center mt-4 text-primary">Signup Form</h3>
                            <p className="m-3 changeResult" > First Name :{this.state.fName}</p>
                            <p className="m-3 changeResult" > Last Name :{this.state.lName}</p>
                            <p className="m-3 changeResult" > Email Addr :{this.state.email}</p>
                            <p className="m-3 changeResult" > Phone No :{this.state.phoneNo}</p>


                            <input name="fName" onChange={this.onChangeHandler} required className="form-control mb-2" type="text" placeholder="First Name"></input>
                            <input name="lName" onChange={this.onChangeHandler} required className="form-control mb-2" type="text" placeholder="Last Name"></input>
                            <input name="email" onChange={this.onChangeHandler} required className="form-control mb-2" type="email" placeholder="Your Email Id"></input>
                            <input name="phoneNo" onChange={this.onChangeHandler} required className="form-control mb-2" type="text" placeholder="Phone No"></input>
                            <input className="form-control btn btn-primary text-uppercase" type="submit" value="Sign Up"></input>
                        </form>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Signup;