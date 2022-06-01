import React from 'react';
import './features.css';


const Features = () => {
  return (
    <div id='service'>
    
    <section>
    <div id='service'>  <h3>Our Services</h3></div>

  
  <div className="services-grid">
    <div className="service service1">
      <i className="ti-bar-chart" />
      <h4>Wealth Management</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta">Read More <span className="ti-angle-right" /></a>
    </div>
    <div className="service service2">
      <i className="ti-light-bulb" />
      <h4>Financial Planning</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta">Read More <span className="ti-angle-right" /></a>
    </div>
    <div className="service service3">
      <i className="ti-money" />
      <h4>Investment Banking</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta">Read more <span className="ti-angle-right" /></a>
    </div>
  </div>
</section>


    </div>
  )
}

export default Features