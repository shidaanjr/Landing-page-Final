import React from 'react';
import undraw_reading from '../../assets/undraw_reading.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Virtuel queue</h1>
      <p>A smart queuing system to streamline the customer journey before, during and after each service. Pre-scheduled appointments for an unforgettable experience</p>

      <div className="gpt3__header-content__input">
        <button type="button">About us</button>
      </div>

    
    </div>

    <div className="gpt3__header-image">
      <img src={undraw_reading} alt="ai" />
    </div>
  </div>
);

export default Header;