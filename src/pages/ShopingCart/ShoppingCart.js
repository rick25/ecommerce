import React from "react";
import { useSelector } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = () => {
  const { cartItems, cartItemCount, totalPrice } = useSelector((state) => ({
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.cart.reduce((count, curItem) => {
      return count + curItem.price * curItem.quantity;
    }, 0),
  }));

  return (
    <div className="container" style={{ paddingTop: "6rem" }}>
      <div className="card shopping-cart">
        <div className="card-header bg-dark text-light">
          <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
          Carrito de compras
          <div className="clearfix"></div>
        </div>
        <div className="card-body">
          {cartItemCount ? (
            cartItems.map((cart, i) => (
              <CartItem key={i} {...cart} img={cart.images[0]} />
            ))
          ) : (
            <h1 className="display-4 mt-5 text-center">
              Su carrito está vacío
            </h1>
          )}
        </div>
        <div className="card-footer">
          <div className="pull-right" style={{ margin: "10px" }}>
            <div className="pull-right" style={{ margin: "5px" }}>
              Total : <b>$ {formatMoney(totalPrice)}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
