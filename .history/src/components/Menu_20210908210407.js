import './Menu.css';

import React from 'react'

import { Link } from 'react-router-dom';



const Menu = () => {
    return (
        <>
    
    <header className='navbar container-fluid'>
        <Link to='/' className='navbar-title navbar-item'>ProfileMaster</Link>
        <Link className='navbar-item'>Home</Link>
        <div className='navbar-item'>Profile</div>
    </header> 
        </>
    )
}

export default Menu
