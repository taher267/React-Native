import React,{Component} from 'react'

class My_states extends Component{
    constructor(){
        super()
        const obj={
            name:["Abu Taher", 'Zakaria'],
            age: [31, 43, 34],
            weight:{
                zk: 49,
                ab :53
            }
        } 
        this.state=obj
    }
    render(){
        return <div>
            <h1>{this.state.name[1]}</h1>
            <h1>{this.state.age[2]}</h1>
            <h1>{this.state.weight.zk}</h1>
        </div>
    }
}

export default My_states