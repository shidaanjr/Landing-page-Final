import React from 'react'
import './featurebox.css'


function FeatureBox (props){
  return (
    <div className='a-box'>
       <div className='a-b-img'>
       <img src={props.image}  alt=''/>
       </div>
       <div className='s-b-text'>
        <h2> {props.text} </h2>
       </div>
    </div>
  )
}

export default FeatureBox