import React from 'react'
import './SearchResult.css'
import { FavoriteBorder } from '@mui/icons-material'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Checkout from './Checkout';
import { useNavigate } from 'react-router-dom';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
})

{
    const navigate  = useNavigate() ; 

  return (
    <div className='searchResult' onClick={()=> navigate('/checkout')}>
        <img src={img} alt='' /> 
        <FavoriteBorder className="searchResult__heart" />
        <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarOutlineIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default SearchResult