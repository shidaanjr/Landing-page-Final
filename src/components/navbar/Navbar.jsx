import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {animateScroll as scroll} from 'react-scroll';
import logotech from '../../assets/logo_tech.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleHome= () =>{
    scroll.scrollToTop();
  }  

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img onClick={toggleHome} src={logotech} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#HIW">How it works</a></p>
          <p><a href="#service">Services</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Book a Ticket</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#1F115A" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#1F115A" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#HIW">How it works</a></p>
          <p><a href="#service">Services</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Book a Ticket</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;