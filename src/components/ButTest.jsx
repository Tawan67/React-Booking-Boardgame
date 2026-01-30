import { Component } from "react";
function SayHi(what){
        alert(what)
}

const ButTest = ({say}) =>{
    return(
        <button onClick={()=> SayHi(say)}>
            ClickMe
        </button>
    )
}
export default ButTest