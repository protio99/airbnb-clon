import React from 'react';
import airbnbLogo from '../images/airbnbLogo1.png';

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={airbnbLogo}></img>
        </nav>
    )
}