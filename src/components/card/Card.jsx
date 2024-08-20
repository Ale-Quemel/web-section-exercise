import React from 'react'
import PropTypes from 'prop-types'

import './styleCard.css'
import { Button } from '../button/Button'

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
