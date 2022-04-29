import React, { Component } from 'react';
import '../Css/Style.css';
export default class Footer extends Component {
  render() {
    return <>
    <footer>
     <div className="waves">
         <div className="wave" id="wave1"></div>
         <div className="wave" id="wave2"></div>
         <div className="wave" id="wave3"></div>
         <div className="wave" id="wave4"></div>
     </div>
     <ul className="social_icon">
         <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
         <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
         <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
         <li><a href="#"><ion-icon name="logo-instagram"></ion-icon>
         </a></li>
     </ul>
     <ul className="menu">
         <li><a href="https://healthcaregrid.in/">Home</a></li>
         <li><a href="#">About Us</a></li>
         <li><a href="#">Contact us</a></li>
         <li><a href="#">Privacy Poilcy</a></li>
        
    
     </ul>
     <p > ©2022 Healthcaregrid.in | All Rights Reserved </p>
    </footer>
    </>;
  }
}
