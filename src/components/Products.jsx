import React from 'react';
import Card, { useState } from "./Card";

function Products(){
    const products = [
        {name: "vest", price: 50},
        {name: "jacket", price: 70},
        {name: "sweater", price: 20},
        {name: "vest", price: 10},
        {name: "vest", price: 40},
        {name: "tshirt", price: 30},
        {name: "jumper", price: 20},
        {name: "jumper", price: 100},
        {name: "tshirt", price: 10},
        {name: "tshirt", price: 15},
    ];

    return(
        <div className="product-list">
            {products.map((product)=>(
                <Card name={product.name} price={product.price} />
            ))}
        </div>
    );
}

export default Products;
