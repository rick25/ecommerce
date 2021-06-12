import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cart = useSelector((state) => state.shop.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Tienda Mia
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/cart"}>
                <FaShoppingCart className="mr-2 mb-1" />
                Carrito {cart.length ? `(${cart.length})` : ""}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
