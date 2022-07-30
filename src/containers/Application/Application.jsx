import React from 'react';
import progressive_app from '../../assets/progressive_app.svg';
import './Application.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={progressive_app} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Discover how virtual queueing works with NoubaTech.  <br /> Download the app and follow the instructions to test your Nouba.</p>
      <h4>Request Early Access to Get Started</h4>
      <div className="app__buttons">
        <a href="#" className="button button-flex">
        <i className="bx bxl-apple button__icon" /> App Store
        </a>
        <a href="#" className="button button-flex">
        <i className="bx bxl-play-store button__icon" /> Google Play
  </a>
</div>

    </div>
  </div>
);

export default Possibility;