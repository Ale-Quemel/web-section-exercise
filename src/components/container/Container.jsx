import React from 'react'
import { CattleSec } from '../sections/cattleSec'
import { FeedingHealthSec } from '../sections/FeedingHealthSec'

import './styleContainer.css'
import { AdminSec } from '../sections/AdminSec'
import { CommercialSec } from '../sections/CommercialSec'

export const Container = () => {
  return (
    <main>
        <CattleSec title='Cattle'/>
        <FeedingHealthSec title='Feeding & Health'/>
        <AdminSec title='Administrative' />
        <CommercialSec title='Commercial' />
    </main>
  )
}
