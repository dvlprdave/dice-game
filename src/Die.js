import React from 'react';
import './Die.css'

export default function Die(props) {
  let faceClass = `die fas fa-dice-${props.face} fa-9x ${props.rolling & 'shaking'}`
  return (
    <div className='die-wrapper'>
      <i className={faceClass}></i>
    </div>
  )
}
