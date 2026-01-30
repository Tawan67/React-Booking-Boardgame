import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';


function Navnew({arrayOfLinks}) {
    return(
      <nav className='flex w-full bg-green-300 top-0 sticky z-50'>
        <div className='md:hidden ml-auto pr-4'>
         <HamburgerMenu linkTo={arrayOfLinks}></HamburgerMenu>
        </div>
        <div className='hidden md:flex md:px-4 lg:px-10 space-x-4 bg-green-450'>
          {
        arrayOfLinks.map((element,index)=>(
          <Link key={index} to={element.path} className="link-box">{element.display}</Link>
        ))
      }
        </div>
        
      </nav>
      
    );
}


export default Navnew;