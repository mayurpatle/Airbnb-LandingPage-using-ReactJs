import { Button } from '@mui/material'
import React from 'react'
import './Banner.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Search from './Search';

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);



  return (
    <div className='banner' >
      <div className='banner__search'>

        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} variant='outlined' className='banner__searchButton'> {showSearch ? "Hide" : "Search Dates"}</Button>
      </div> 

      <div className='banner__info'>
        <h1> Get Out and stretch your  imagination</h1>
        <h5>
          Plan a different  kind of getaway  to  uncover  the  hidden gems  inside you.
        </h5>
        <Button onClick={() => navigate('/search')} variant='outlined'> Explore  Nearby  </Button>
      </div>
        




    </div>
  )
}

export default Banner