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
       <h3>Our categories</h3>
       </div>


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
           
        

      </section>
  )
}

export default Categories