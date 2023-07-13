import React from 'react'
import Logo from '../img/logo.png'

const Footer =() =>{
    return (
        <div className='footer'>
            <p>Developed by: </p>
            <img src={Logo} className='logo'/>
        </div>
    )
}

export default Footer;