
import React from 'react'
import { Card } from '../card/Card'

import './styleSectionRep.css'

export const CommercialSec = ( { title } ) => {
  return (
    <section class='cardSection'>
        <h2 class='titleSection'>{ title }</h2>
            <div class='cardContent'>
                <Card title="Cattle Purchases" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card title="Cattle Sales" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card title="Supply movements" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
    </section>
  )
}
