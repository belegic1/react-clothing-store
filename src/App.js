import React from 'react';

import {  Routes, Route} from "react-router-dom"
import './App.css';
import Header from './components/header/header.component';
import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="shop" element={<ShopPage />} />
        </Routes>
    </div>
  );
}
<Home />
export default App;
