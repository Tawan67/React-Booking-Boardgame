import React from "react"; //import
import { useNavigate } from 'react-router-dom';
//name is Object na i sus so maung can't print opject !!
function MyButton({name,name_two}) { //function 
const navigate = useNavigate();

const handleClick = () => {
    console.log("กำลังจะเปลี่ยนหน้า...");
    navigate('/contant');
}

let checker = name_two;
if(checker >= 0){
    checker = "More Than Word";
}
  return (
    <>
    <button onClick={handleClick}>I'm a button{name}</button>
    <br />
    <button>this is second button:{checker}</button>
    </>
    
  );
}
// function EileeTi(){
//     return(
//         <>
//         <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//         </>
//     )
// }

export default MyButton;//return