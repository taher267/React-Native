import React,{Component} from 'react'
class Condition1 extends Component{
    constructor(){
        super()
        this.state={
            login:true
        }
    }
    render(){
        if(this.state.login==1){
            return(
                <button className="btn btn-success">LOGOUT</button>
            );
        }else{
            return (<button className="btn btn-warning">LOGIN NOW</button>)
        }
    }
}
export default Condition1;