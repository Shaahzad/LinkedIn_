import React from 'react'
import "./Inputoption.css"

const Inputoption = ({title,color,Icon}) => {
  return (
    <div className='inputoption'>
       <Icon style={{color: color}}/>
       <h4>{title}</h4>
    </div>
  )
}

export default Inputoption