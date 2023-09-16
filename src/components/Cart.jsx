import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} x{item.quantity} - ${item.price}
            <br />
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;