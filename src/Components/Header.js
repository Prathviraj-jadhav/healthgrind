
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact';
import Productcard from './Productcard';
import '../Css/Style.css';


function Header() {
  return (
	<Router>
	<header class="header">
    <div class="container flex-between">
      <div class="logo">
        <a href="https://healthcaregrid.in/"><h1>
            Dawaai
        </h1>
          <img src="" alt="" />
        </a>
      </div>
      <nav class="main-navgation flex-between flex-ver-top">
        <div class="nav-links">
        <Link to="/Productcard">Products</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        
        </div>
        <div class="nav-buttons">
        <a href="#Shoonytam" class=""> Login</a>

          <a href="#Shoonytam" class="sign-up btn btn-sm"> Seller</a>
        </div>
      </nav>
      <div class="burger-menu">
        <i class="fa-regular fa-bars icon"></i>
      </div>


      <Routes>
				<Route exact path='/Productcard' element={< Productcard />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				<Route exact path='/Contact' element={< Contact />}></Route>
		</Routes>
	


    </div>
  </header>
		


    



	</Router>
  


);
}


export default Header;

  