import React, { useState, useEffect } from 'react';
import Product from './Product';
import Cart from './Cart';

function App() {
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
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
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
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;