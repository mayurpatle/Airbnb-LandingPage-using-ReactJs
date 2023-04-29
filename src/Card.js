import React from 'react'
import  './Card.css'

function card({ src , title , description ,  price }) {
  return (
    <div>
        <div className='card'>
            <img src={src} alt = ""/> 
            <div className='card__info'>
                <h2>{title }</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            

        </div>
    </div>
  )
}

export default card
