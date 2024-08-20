import { useState } from 'react';
import { Button } from '../button/Button';

import './styleCard.css';

export const Card = ({ title, description }) => {
  
  const [ counter, setCounter ] = useState ( 0 );

  const [isVisible, setIsVisible] = useState(false);

  const handleAdd = () => {
    setCounter( counter + 1);
    setIsVisible(true);
  }  
  
  return (
    <section onClick={ handleAdd } id='card'>
      <div className='description'>
        <h2>{ title }</h2>
        <p>{ description }</p>
        {isVisible && (<p className='indicator'> Número de intentos: { counter }</p>)}
      </div>
      <Button counter={ counter }/>
    </section>
  )
}
