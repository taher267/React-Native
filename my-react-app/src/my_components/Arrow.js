import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// function Arrow() {
//     <button>My Button</button>
// }

const AlertMe=(a)=>{
    alert(a)
}
const Arrow=()=>{
    return(
        
        <button onClick={AlertMe.bind(this, "i'm from Arrow Func!")} className="btn btn-warning m-5">My Btn</button>
    );
}
export default Arrow
