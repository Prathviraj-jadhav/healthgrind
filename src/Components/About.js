import React, { Component } from 'react';
import '../Css/About.css'
import DeliveryBoy from '../Images/Delivery Boy.jpeg'

    export default class About extends Component {
        render() {
          return(
    <div> 
        
         <div class = "image">
    <img src={DeliveryBoy}/>
 </div>

 <div class = "content">
     <h2>About Us</h2>
     <span></span>
     <h2>Shoonytvam</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
     <ul class = "links">
         <li><a href = "#">work</a></li>
         <div class = "vertical-line"></div>
         <li><a href = "#">service</a></li>
         <div class = "vertical-line"></div>
         <li><a href = "#">contact</a></li>
     </ul>
     
 </div>
<br/>
<div class="row">
<h2 class="section-heading">Our Services</h2>
</div>
<div class="row">
<div class="column">
 <div class="card">
   <div class="icon-wrapper">
     <i class="fas fa-hammer"></i>
   </div>
   <h3>Service Heading</h3>
   <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
     consequatur necessitatibus eaque.
   </p>
 </div>
</div>
<div class="column">
 <div class="card">
   <div class="icon-wrapper">
     <i class="fas fa-brush"></i>
   </div>
   <h3>Service Heading</h3>
   <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
     consequatur necessitatibus eaque.
   </p>
 </div>
</div>
<div class="column">
 <div class="card">
   <div class="icon-wrapper">
     <i class="fas fa-wrench"></i>
   </div>
   <h3>Service Heading</h3>
   <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
     consequatur necessitatibus eaque.
   </p>
 </div>
</div>

<ul class = "icons">
 <li>
     <i class = "fa fa-twitter"></i>
 </li>
 <li>
     <i class = "fa fa-facebook"></i>
 </li>
 <li>
     <i class = "fa fa-instagram"></i>
 </li>
 <li>
     <i class = "fa fa-youtube"></i>
 </li>
</ul>
</div>
</div>);
}
}
