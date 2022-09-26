import React from 'react';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Homepage from './pages/Homepage/Homepage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Shop from './pages/Shop/Shop';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-detail" element={<ProductDetails />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
};

export default App;
