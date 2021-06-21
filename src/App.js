import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showCardHandler = () => {
    setcartIsShown(true);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvider>

      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>

    </CartProvider> 

  );
}

export default App;
