
import React from 'react'
import { Card } from '../card/Card'

import './styleSectionRep.css'

export const CattleSec = ( { title } ) => {
  return (
    <section class='cardSection'>
        <h2 class='titleSection'>{ title }</h2>
            <div class='cardContent'>
                <Card title="Closeouts" description="Records of closeouts for a selected period"/>
                <Card title="Livestock Inventory" description="Cattle inventory reports at certain dates, by lot, sublot and owner"/>
                <Card title="Dead Animals" description="Records of dead animals filtered by date"/>
                <Card title="Yardsheet" description="Observe all the movements of your yardsheet"/>
            </div>
    </section>

  )
}
