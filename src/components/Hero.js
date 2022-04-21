import React from 'react';

export default function Hero(){
    return(
        <div className='hero'>
            <div>
                <img src="images/Group 77.png" className = 'hero--img'></img>
            </div>
            <div className='hero-text'>
                <div className='hero-text-h1'>
                    <h1>Online Experiences</h1>
                </div>
                <div className='hero-text-p'>
                     <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </div>
    )
}