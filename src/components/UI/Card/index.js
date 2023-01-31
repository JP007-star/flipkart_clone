import React from 'react'
import './style.css'
/**
* @author
* @function Card
**/

export const Card = (props) => {
  return (
    <div className='card' {...props}>
      <div className='card-header'>
        {
           props.headerleft &&  <div>{props.headerleft}</div>
        }
        {
           props.headerright &&  <div>{props.headerright}</div>
        }
        
      </div>
      {props.children}
    </div>
  )

}