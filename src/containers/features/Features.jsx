import React from 'react';
import './features.css';


const Features = () => {
  return (
    <div id='service'>
    
    <section>
    <div id='service'>  
    <h3>Our Services</h3></div>

  
  <div className="services-grid">
    <div className="service service1">
      <i className="ti-bar-chart" />
      <h4>Time Management</h4>
      <p>Waiting in line is one of the most commonly cited reasons for customer frustration. 73% of people would abandon the service wanted if they had to queue for more than five minutes.
      An advanced queue management system helps combat that, by improving the queuing processes and flow.</p>
    </div>
    <div className="service service2">
      <i className="ti-light-bulb" />
      <h4>Improve service quality</h4>
      <p>Whether the waiting experience is good or bad colors the perception of the entire service interaction.
      Automated queuing systems benefit your customers by giving them the freedom to check their queue status at their own convenience. This lets customers use their time for something other than standing in line..</p>
    </div>
    <div className="service service3">
      <i className="ti-money" />
      <h4>Increase customer loyalty</h4>
      <p>Reducing wait times is a small but meaningful improvement to your service. If you don’t implement a smart queuing tool, you risk losing your customers altogether. By solving the issue of long waits, you make sure your customers don’t decide to go to your competitors.</p>
    </div>
  </div>
</section>


    </div>
  )
}

export default Features