import React, { useState, useEffect } from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.title}</h3>
      <img className='max-w-xs' src={product.image} alt="image" />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;