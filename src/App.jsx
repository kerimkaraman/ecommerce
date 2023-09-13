import React, { useState } from 'react'
import { Route } from "wouter";
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { ItemID } from './context/CurrentItem';
import { CartItemContext } from './context/CartItems';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [productID, setProductID] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  return (
    <ItemID.Provider value={{ productID, setProductID }}>
      <CartItemContext.Provider value={{ cartItems, setCartItems, subtotal, setSubtotal }}>
        <div className='App font-mono'>
          <Route path="/" component={Homepage} />
          <Route path="/cart" component={CartPage} />
          <Route path='/products/:ids' component={ProductPage} />
          <Route path='/error' component={ErrorPage} />
        </div>
      </CartItemContext.Provider>
    </ItemID.Provider>
  )
}

export default App
