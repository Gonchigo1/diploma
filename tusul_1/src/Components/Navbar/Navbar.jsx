import React, { useState } from 'react';
import './Navbar.css'; // Import the Navbar.css file here
import logo from '../assets/logoo.png';
import cart_icon from '../assets/cart_icon.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("Засварын төв");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>CarRepair</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("Засварын төв") }}>Засварын төв {menu === "Засварын төв" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Сэлбэг") }}>Сэлбэг  {menu === "Сэлбэг" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Нэвтрэх</button>
        <button>Бүртгүүлэх</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
  