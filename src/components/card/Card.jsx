import React from 'react'
import { Button } from '../button/Button'

import './styleCard.css'

export const Card = ({ title, description }) => {
  
  return (
    <div id='card'>
        <Button/>
        <div class='description'>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
    </div>
  )
}
