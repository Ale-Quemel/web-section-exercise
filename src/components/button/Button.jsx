import React from 'react'
import { useState } from 'react';
import './styleButton.css'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

export const Button = () => {

    const [ counter, setCounter ] = useState ( 0 );

    const handleAdd = () => {
    
    setCounter( counter + 1);
  }

    return (
        <div class='container'>
            <p class='indicator'> Número de intentos: { counter } </p>
            <button class='btn' on onClick={ handleAdd }>
                <ArrowOutwardRoundedIcon id='icon'/>
            </button>
        </div>
  )
}
