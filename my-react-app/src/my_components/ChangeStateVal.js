import React,{Component} from 'react'

class ChangeStateVal extends Component{
   constructor(){
    super()
    this.state={
        name: 'Taher'
    }
    
   }
    changeName(a){
        this.setState({name:a})       
    }
    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button className="btn btn-primary" onClick={this.changeName.bind(this, "Abu Taher")}>Change Name</button>
        </div>
    }
}
export default ChangeStateVal;