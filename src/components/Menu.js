import './Menu.css';

import React from 'react'

import { Link } from 'react-router-dom';



const Menu = () => {
    return (
        <>
    
    <header className='navbar container-fluid'>
        <Link to='/' className='navbar-title navbar-item'>ProfileMaster</Link>
        <Link to='/' className='navbar-item'>Home</Link>
    </header> 
        </>
    )
}

export default Menu
