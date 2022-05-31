import React from 'react'
import choose from '../../assets/choose.svg'
import add_information from '../../assets/add_information.svg'
import Company_system from '../../assets/Company_system.svg'
import mail from '../../assets/mail.svg'
export const HIW = () => {
  return (
    <div>
    
    <h2>How it works</h2>

    <div className='HIW'>

         <div className='step1'>
            <img src={choose} alt=''/>
            <span>1</span>
            Fill in your all informations
         </div>

         <div className='step2'>
            <img src={add_information} alt=''/>
            <span>2</span>
            Enter you phone number recieve your code SMS
         </div>
    
         <div className='step3'>
            <img src={mail} alt=''/>
            <span>3</span>
            Filter by Category
         </div>

         <div className='step4'>
            <img src={Company_system} alt=''/>
            <span>4</span>
            Choose Company
         </div>

         <div className='step5'>
            <img src='' alt=''/>
            <span>5</span>
            Choose Service 
         </div>

         <div className='step6'>
            <img src='' alt=''/>
            <span>6</span>
            Choose Agency   
         </div>

         <div className='step7'>
            <img src='' alt=''/>
            <span>7</span>
            Book your Ticket
         </div>

         <div className='step8'>
            <img src='' alt=''/>
            <span>8</span>
            Print your Ticket
         </div>
    

    </div>
    
    
    </div>
  )
}
