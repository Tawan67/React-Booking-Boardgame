import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const HamburgerMenu = ({linkTo}) => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button onClick={toggle}>Menu {isOpen}</button>
        {isOpen && (
            <div className='flex flex-col bg-gray-300 border-[2px] md:w-30px w-[px] absolute'>
                {linkTo.map((ele,index)=>{
                    
                    return (<Link to={ele.path} key={index} 
                    className='border'
                    >{ele.display}</Link>);
                })}  
            </div>
        )}
    </div>
    
    
  )
}
