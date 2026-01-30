
import React from 'react'
import UseStateTester from '../components/UseStateTester'
import Product from '../components/Product'
import ProductsTable from '../components/ProductsTable';
function TestPage() {
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tIektgYn54QOmNLdGpadDjLNt0x_vEhhaQ&s";
    const myProducts = [
    {  nameA: "Product 1", price: 100, tag: "A", image: img1 },
    {  nameA: "Ware Wolf", price: 200, tag: "Ecchi", image: img1 },
    {  nameA: "Product 3", price: 300, tag: "C", image: img1 },
    {  nameA: "Product 4", price: 400, tag: "D", image: img1 },
    {  nameA: "Product 5", price: 500, tag: "E", image: img1 },
  ];
  return (
    
    <div className='bg-yellow-400 h-[900px]'>
        TestPage
        <br />
        <UseStateTester></UseStateTester>
        <br />
        <p className='bg-green-50 pl-[20px]'>
         Product
        </p>
        <br />
        <Product ele={myProducts[1]}></Product>
        <br />
        <ProductsTable products_in={myProducts}></ProductsTable>
    
        

    </div>
  )
}

export default TestPage