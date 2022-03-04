import React from 'react';
//import katie from '../images/image.png';
import start from '../images/Star.png';

export default function Card(props){
    return(
        <div className='card'>
            <div className='card--top'>
                <img src={props.imge}></img>
                <div className='card--top-state'>
                    <h2>SOLD OUT</h2>
                </div>
            </div>
            <div>
                <div className='card--top-ratting'>
                    <img src={start}></img>
                    <h2>{props.ratting} {props.reviewCountry} • {props.location}</h2>
                </div>
                <div className='card-bottom'> 
                    <p className='card-bottom-tittle'>{props.title}</p>
                    <p className='card-bottom-price'><b>From ${props.price}</b> / person</p>
                </div>
            </div>


        </div>
    )
}