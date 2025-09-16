import React, { useContext } from 'react'
import "./Cart.css"
import { AppContext } from '../utiils/AppContext';

const Cart = () => {
  const { cart } = useContext(AppContext);

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />

              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-quantity">
                  <button>-</button>
                  <span>{item.quantity || 1}</span>
                  <button>+</button>
                </div>
              </div>

              <button className="cart-remove">delete</button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${getTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
