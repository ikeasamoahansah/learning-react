import React from 'react';

const ClearCartButton = ({ onClearCart }) => {
  return (
    <button onClick={onClearCart}>Clear Cart</button>
  );
};

export default ClearCartButton;
