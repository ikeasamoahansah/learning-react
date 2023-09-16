import React, { useState, useEffect } from 'react';
import Product from './Product';
import Cart from './Cart';
import ClearCartButton from './ClearCartButton';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            if (response.status >= 400) {
            throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => {
            setProducts(response);
        })
        .catch((error) => {
            console.error('Error fetching product data:', error)
        })
        .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Increment the quantity if the item already exists in the cart
      existingItem.quantity += 1;
      setCartItems([...cartItems]); // Create a new array
    } else {
      // Add the item to the cart with an initial quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]); // Create a new array
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart by setting it to an empty array
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className='grid grid-cols-6 gap-4'>
      <h1>Online Store</h1>
      <div className="col-start-2 col-span-4">
        <h1>Product List</h1>
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div> 
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ClearCartButton onClearCart={clearCart} />
      </div>
    </div>
  );
}

export default Shop;