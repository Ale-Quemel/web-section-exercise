
import React from 'react'
import { Card } from '../card/Card'

import './styleSectionRep.css'

export const AdminSec = ( { title } ) => {
  return (
    <section class='cardSection'>
        <h2 class='titleSection'>{ title }</h2>
            <div class='cardContent'>
                <Card title="Billing Invoices" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card title="Closeouts" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card title="Expenses" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
                <Card title="Statements" description="08/19/2024 lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
    </section>

  )
}
