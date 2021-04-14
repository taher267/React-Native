import React,{Component} from 'react'
import '../../node_modules/fontawesome/css/fontawesome.min.css'
class Refresh extends Component{
    constructor(){
        super();
        this.refreshMe= this.refreshMe.bind(this);
    }
    refreshMe(){
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                <button className="btn btn-light" onClick={this.refreshMe}><i class="fas fa-sync-alt"></i> Refresh
                </button>
                <h2>{Math.random()}</h2>
            </div>
        )
    }
}

export default Refresh;
