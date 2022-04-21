import React from 'react';
//import katie from '../images/image.png';


export default function Card(props){
    let topState 
    if(props.element.openSpots === 0){
        topState = "SOLD OUT"
    }else if(props.element.location === "Online"){
        topState = "ONLINE"
    }
    return(
        <div className='card'>
            <div className='card--top'>
                <img src={props.element.coverImg}></img>
                {topState && <div className='card--top-state'>
                    <h2>{topState}</h2>
                </div>}
            </div>
            <div>
                <div className='card--top-ratting'>
                    <img src="images/Star.png" alt="fdsf"></img>
                    <h2>{props.element.stats.rating} {props.element.stats.reviewCount} • {props.element.location}</h2>
                </div>
                <div className='card-bottom'> 
                    <p className='card-bottom-tittle'>{props.element.title}</p>
                    <p className='card-bottom-price'><b>From ${props.element.price}</b> / person</p>
                </div>
            </div>


        </div>
    )
}