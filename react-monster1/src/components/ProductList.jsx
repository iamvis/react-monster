import React from 'react'

const ProductList = () => {
    const products= [
        {id:1, name: "Phone", price: "$699"},
        {id:2, name: "Laptop", price: "$1200"},
        {id:3, name: "Headphone", price: "$199"},
        {id:4, name: "Headmask", price: "$999"}
    ]
  return (
    <div>{
        products.map(({id, name, price})=>(
            <li key={id}>
                <h1>Name : {name}</h1>
                <h1>Price : {price}</h1>
            </li>
        ))
        }
      
    </div>
  )
}

export default ProductList;
