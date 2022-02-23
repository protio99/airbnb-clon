import React from 'react';
import women from '../images/image.png';
import start from '../images/Star.png';

export default function Card(){
    return(
        <div className='card'>
            <div className='card--top'>
                <img src={women}></img>
                <div className='card--top-state'>
                    <h2>SOLD OUT</h2>
                </div>
            </div>
            <div>
                <div className='card--top-ratting'>
                    <img src={start}></img>
                    <h2>5.0 (6) • USA</h2>
                </div>
                <div className='card-bottom'> 
                    <p className='card-bottom-tittle'>Life lessons with Katie Zaferes.</p>
                    <p className='card-bottom-price'><b>From $136</b> / person</p>
                </div>
            </div>


        </div>
    )
}