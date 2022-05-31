import React from 'react'
import './Categories.css';
import {AiFillBank} from 'react-icons/ai'
// import {FaHospitalAlt} from 'react-icons/fa'
// import {GiPoliceOfficerHead} from 'react-icons/gi'
// import {ImOffice} from 'react-icons/im'
// import {GiPostOffice} from 'react-icons/gi'
// import {BsNewspaper} from 'react-icons/bs'



const Categories = () => {
  return (
      <section id='Category'>
       <div className="title">
       <h5>Get To Know</h5>
       <h2>Our categories</h2>
       </div>

        <div className="container category__container">

          <div className="category__content">
          <div className="category__cards">
              <article className="category__card">
              <AiFillBank className='category__icon'/>
              <h5>Bank</h5>
              <small>3+ Years working</small>
              </article>

              <article className="category__card">
              <AiFillBank className='category__icon'/>
              <h5>Bank</h5>
              <small>3+ Years working</small>
              </article>

              <article className="category__card">
              <AiFillBank className='category__icon'/>
              <h5>Bank</h5>
              <small>3+ Years working</small>
              </article>


           </div>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
        </div>
      </section>
  )
}

export default Categories