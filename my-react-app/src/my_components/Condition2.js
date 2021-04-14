import React,{Component} from 'react'
class Condition2 extends Component{
    constructor(){
        super()
        this.state={
            login:1
        }
    }
    render(){
        return(
            //this.state.login? <h2 className="text-primary m-2">Bismillah</h2> : <h1>Alhamdu Lillah</h1>
            this.state.login? (
                <h2 className="text-primary m-2">Bismillah</h2>
            ) : 
            (<h1>Alhamdu Lillah</h1>)
        );
    }
}
export default Condition2;