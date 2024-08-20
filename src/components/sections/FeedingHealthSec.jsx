
import React from 'react'
import { Card } from '../card/Card'

import './styleSectionRep.css'

export const FeedingHealthSec = ( { title } ) => {
  return (
    <section class='cardSection'>
        <h2 class='titleSection'>{ title }</h2>
            <div class='cardContent'>
                <Card title="Feed Deliveries" description="Records of every feeding event, by lot, owner or pen, for different periods and granularity"/>
                <Card title="Grain Bank Report" description="Grain bank report for a selected period"/>
                <Card title="Health Treatments" description="Records of every health treatment event by sublot or animal"/>
                <Card title="Feedstock" description="Inventory and movement history for feeding supplies"/>
            </div>
    </section>
  )
}
