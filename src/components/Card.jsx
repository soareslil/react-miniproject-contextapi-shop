import React, { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import "./styles/card.css";

function Card({ name, price }) {
  return (
    <>
    <div className="product-list">
      <div className="formato">
        <div className="card">
          <IoShirtOutline className="icon-shirt" />
        <div className="name-and-icon">
          <div className="product-name">
            <h3>{name}</h3>
          </div>
          <div className="icon-purchase">
            <AiFillShopping />
          </div>
        </div>
        <div className="product-price">
          <h4>${price}</h4>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Card;
