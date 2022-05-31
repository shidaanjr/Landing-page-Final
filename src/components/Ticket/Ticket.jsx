import React from 'react';
import './Ticket.css';
import undrawID from '../../assets/undrawID.svg'

const Ticket = () => {
  return (
    <div>
    <h3>Book Ticket</h3>
    
    <div className='container2'>
     <div className='image'>
      <img src={undrawID} alt="CIN"/>
     </div>
     <form>
     <h2>Enter your CIN number</h2>
     <h2>in order to book your ticket</h2>
      <input type="CIN" placeholder="enter your CIN"/>
      <button type="submit">ENTER</button>
     </form>
    </div>
    </div>

  )
}

export default Ticket