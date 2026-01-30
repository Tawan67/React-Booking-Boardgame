import React from 'react'
import Product from './Product';

const ProductsTable = ({ products_in = [] }) => {
  return (
    <div className="p-[15px]">
      {/* ใช้ grid-cols-4 เพื่อแบ่ง 4 คอลัมน์ และ gap สำหรับระยะห่าง */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem]">
        {products_in.map((item, index) => (
          <li key={item.id || index}>
            <Product ele={item}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsTable