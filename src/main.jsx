import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

import './styles.css'
import { NavBar } from './components/navbar/NavBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
  </StrictMode>,
)
