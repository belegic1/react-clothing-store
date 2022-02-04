import React from 'react';

import {  Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
  );
}
<Home />
export default App;
