import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import './styleNavBar.css'

export const NavBar = () => {
  return (
    <nav class='navBar'>
        <DescriptionOutlinedIcon fontSize='large' id='icon-bill'/>
        <h1 class='title'>Reports</h1>
    </nav>
  )
}
