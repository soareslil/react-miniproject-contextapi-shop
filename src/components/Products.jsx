import React from "react";
import Card, { useState } from "./Card";

function Products() {
  const products = [
    { name: "C&A", price: 50 },
    { name: "Renner", price: 70 },
    { name: "Marisa", price: 20 },
    { name: "Riachuelo", price: 10 },
    { name: "Calvin Klein", price: 40 },
    { name: "MM Martan", price: 30 },
    { name: "Zara", price: 20 },
    { name: "Lacoste", price: 100 },
    { name: "Zinzane", price: 10 },
    { name: "Champion", price: 15 },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Products;
