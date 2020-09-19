import React from 'react';
import '../../scss/2-modules/Card.scss';

function Card({data}){
    return(
        <div className="cardContainer">
            <h1 className="titleContainer">Album Title: {data.title} </h1>
            <p className='detailsContainer'>User: Name Of User.......... <span className='viewMore'><a href={'/details/'+data.id+'/'}>View More</a></span></p>
        </div>
    )
}


export default Card;