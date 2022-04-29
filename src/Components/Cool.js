import React, { Component } from 'react';
import '../Css/Style.css';

import healths from '../Images/health.svg'

export default class Cool extends Component {
  render() {
    return<>
<section className="scene">
<div className="sun"></div>
<div className="bg"></div>
<img alt="healthcaregrid" src={healths} className="car1"/>
<img alt="healthcaregrid" src={healths} className="car2"/>
</section>
<script>
const sun = document.querySelector('.sun');
const  body = document.querySelector('.body');
sun.onclick = function()
</script>
 


<section className="pricing" id="pricing">
     <div className="container">
       <div className="section-header">
       <a href="https://healthcaregrid.in/"> <h2>Join Dawa.ai</h2></a>
         <a href="#Shoonytam" className="btn btn-lg">Get Started</a>
       </div>
     </div>
   </section>

 
 </>;
}
}