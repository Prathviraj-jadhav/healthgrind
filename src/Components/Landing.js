
import React, { Component } from 'react';
import '../Css/Style.css';

import shape from '../Images/Circles-1-1.svg'
import op from '../Images/op.jpeg'
import customizable from '../Images/customizable.svg'
import detailed from '../Images/icon-detailed-records.svg'
import brand from '../Images/icon-brand-recognition.svg'

export default class Landing extends Component {
  render() {
    return <>
    {/* ----------------------Landing--------------------------------- */}
<section className="landing">
<div className="landing-text">
              <h1>More than just an ePharmacy</h1>
  <p>
  Be a part of the eRevolution       </p>
  <a href="#Shoonytam" className="btn btn-lg">Get Started</a>
  <img src={shape} />  
</div>

<div className="landing-image">
  <img src={op} alt="Working Illustration" />
</div>
</section>


{/* -------------Advanced Feature--------------------------------- */}

  <div className="more-features">
    <div className="section-header">
      <h2>The Foundation</h2>
      <p>
       
      </p>
      <bgimg src={shape} />  
    </div>
    <div className="more-features-content">
      <div className="feature">
        <div className="feature-illustration">
          <img src={brand} alt="Feature Illustration Icon" />
        </div>
        <div className="feature-details">
          <h3>Vision</h3>
          <p>
          To be a world-class Quick Commerce Player for healthcare
          </p>
        </div>
      </div>
      <div className="feature">
        <div className="feature-illustration">
        <img src={detailed} alt="Feature Illustration Icon" />
        </div>
        <div className="feature-details">
          <h3>Mission</h3>
          <p>
          To meet your healthcare needs at an affordable cost

          </p>
        </div>
      </div>
      <div className="feature">
        <div className="feature-illustration">
          <img src={customizable} alt="Feature Illustration Icon" />
        </div>
        <div className="feature-details">
          <h3>Values</h3>
          <p>
          Your time is incredibly valuable to us, just as it is to you
</p>
        </div>
      </div>
    </div>
  </div>



  </>;
  }
}