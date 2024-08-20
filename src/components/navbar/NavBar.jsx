import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import './styleNavBar.css';

export const NavBar = () => {
  return (
    <nav className='navBar'>
        <DescriptionOutlinedIcon fontSize='large' id='icon-bill'/>
        <h1 className='title'>Reports</h1>
    </nav>
  )
}
