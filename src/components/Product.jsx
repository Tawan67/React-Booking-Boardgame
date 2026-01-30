import React from 'react'
import "./Product.css"

const Product = ({ele}) => {
  return (
    <div className="w-80 h-30 bg-gray-600 border-2 border-white flex items-center rounded-2xl" typeof='input'>    
          <img src={ele.image} alt="Doesn't have PicNow" className='bg-red-500 w-30 h-25 ml-[1rem] rounded-2xl'/>
          <div className="product-details ml-[1rem] ">
            <p className='bg-red-50 rounded-lg border-3 px-3'> Name: {ele.nameA} </p>
            <p className='bg-green-50 rounded-lg border-3 px-3'> Price :{ele.price} </p>
            <p className='bg-blue-50 rounded-lg border-3 px-3'> Tag : {ele.tag} </p>
          </div> 
    </div>
  )
}

export default Product