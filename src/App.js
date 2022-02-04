import React from 'react';

import {  Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="shop" element={<ShopPage />} />
        </Routes>
    </div>
  );
}
<Home />
export default App;
