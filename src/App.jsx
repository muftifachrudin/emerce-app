import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import History from './pages/History';
import ProductDetail from './pages/ProductDetail'
import MyNavbar from './components/MyNavbar';


const App = () => {
  return (
    <Router>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
    </Router>
  )
}
export default App;