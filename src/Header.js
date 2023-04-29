import React , { useState }  from 'react'
import './Header.css'
import { ImportContacts, Search } from '@mui/icons-material'
import { Language } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Link } from 'react-router-dom';
import  About from  './About'
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  

  


  

  return (
    
    <div className='header'>
      <Link to='/' >
        <img className="header__icon" 
        src="data:image/png;base64,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"

        alt=''
        />
      </Link>
        <div className = 'header__center'>
            <input type= "text"  />
            <Search />
            
        </div>

        <div className='header_right'>
          <p className='about  ' onClick={() => navigate('/about')}>  About  </p>
          <p className='Signin 'onClick={() => navigate('/signin')} > Sign in </p> 


          <p>  Become  a  Host  </p>
          <Language /> 
          <ExpandMoreIcon />  
          <Avatar  className = 'avatar'/> 
          
          


        </div>


    </div>
    
  )
}

export default Header