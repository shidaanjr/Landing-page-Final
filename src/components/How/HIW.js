import React from 'react'
import './HIW.css'
import choose from '../../assets/choose.svg'
import add_information from '../../assets/add_information.svg'
import Company_system from '../../assets/Company_system.svg'
import agency from '../../assets/agency.svg'
import ticket from '../../assets/ticket.svg'
import print from '../../assets/print.svg'
import my_answer from '../../assets/my_answer.svg'
export default function HIW () {
    const data =[
      {
          Image: add_information,
          title: "1",
          description: "Fill in your all informations",

      },
      {
        Image: add_information,
        title: "2",
        description: "Enter you phone number to recieve your code SMS",

    },
    {
        Image: choose,
        title: "3",
        description: "Filter by Category",

    },
    {
        Image: Company_system,
        title: "4",
        description: "Choose Company",

    },
    {
        Image: my_answer,
        title: "5",
        description: "Choose Service",

    },
    {
        Image: agency,
        title: "6",
        description: "Choose Agency",

    },
    {
        Image: ticket,
        title: "7",
        description: "Book your Ticket",

    },
    {
        Image: print,
        title: "8",
        description: "Print your Ticket",

    },
    ]
  return (
    <div  className='Steps' id='HIW'>
    <h3>How it works</h3>

    <br/>
    <div className="lilsteps">
    {data.map(({ Image, title, description }) => {
      return (
        <div className="etape" key={title}>
        <div className='num' >{title}</div>
          <img src={Image} alt="service" />
          <p>{description}</p>
        </div>
      );
    })}
  </div>
    
  </div>
  )
}

