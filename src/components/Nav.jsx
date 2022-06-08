import React from 'react';
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/nav.css";
import CartContext from "../CartContext";
import { useContext } from "react";

function Nav() {

 const {items} = useContext(CartContext);

  return (
    <nav className="header-nav">
      <Link to={"/"} style={{textDecoration: 'none', color: "black"}}>
        <h1>Wear</h1>
      </Link>
      <Link to={"/checkout"} style={{textDecoration: 'none', color: "black"}}>
        <div className="cart">
          <AiFillShopping />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
