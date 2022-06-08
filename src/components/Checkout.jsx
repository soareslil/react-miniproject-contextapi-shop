import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import "./styles/card.css";

function Checkout() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h3>Checkout</h3>
      <div className="checkout">
        {items.map((item) => (
          <div>
            <div className="product-list">
              <div className="formato">
                <div className="card">
                  <IoShirtOutline className="icon-shirt" />
                  <div className="name-and-icon">
                    <div className="product-name">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="icon-purchase">
                      <AiFillShopping />
                    </div>
                  </div>
                  <div className="product-price">
                    <h4>${item.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Checkout;
