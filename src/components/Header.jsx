import React from 'react'
import { Link } from 'react-router-dom'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


function Header() {
  return (
  
  
    <div className='header'>
    <ul>
      <Link to='/dashboard'><strong><li><GridViewOutlinedIcon/> Dashbord</li></strong></Link>
      <Link to='/about'><strong><li><CategoryOutlinedIcon/> About</li></strong></Link>
      <Link to='/services'><strong><li><DesignServicesOutlinedIcon/> Services</li></strong></Link>
      <Link to='/blog'><strong><li><BookOutlinedIcon/> Blog</li></strong></Link>
      <Link to='/contact'><strong><li><ContactPhoneOutlinedIcon/> Contact</li></strong></Link>
      <Link to='/logout'><strong><li><ExitToAppOutlinedIcon/> Logout</li></strong></Link>
    </ul>
    
  </div>
  )
}

export default Header
