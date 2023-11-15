import React from 'react';
import Logo from '../images/logo.png.webp';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaBehance} from 'react-icons/fa6';
import {FaDribbble} from 'react-icons/fa';


const Navbar = () => {
const[menu, setmenu] = useState(true);
// let[menubar, setmenubar] = useState(true)
const updateHandler=()=>{
    setmenu(false)
}
const closeHandler =() =>{
    setmenubar(false)
    setTimeout(()=>{
        setmenu(true)
        setmenubar(true)
    },700)
   
}
let [menubar,setmenubar]=useState(true)
let Closinghandler=()=>{
    setmenu(true)
    
}

  return (
    
        <nav className='navbar-nav'>
            <div className='nav-logo'>
            <img src={Logo} alt="" height="30px" />
            </div>
           {(menu)?<><div className='nav-menu' onClick={updateHandler}>
            <h2 className='nav-menu-item'>MENU</h2>
            <button className='nav-btn'> <FaBars /></button>
           
            </div></>:<><div className={ `main-menu ${(menubar)?'main-menu_bar1':'main-menu_bar2'}`}>
            <div className='nav-navigation' onClick={closeHandler}>
             <h4 className='h4-navigation'>NAVIGATION</h4>
            <button className='nav-btn nav-close-btn'> <FaTimes/></button>
            </div>
            <div className='menu-items'>
                <a href="#home" onClick={Closinghandler}>Home</a>
                <a href="#about" onClick={Closinghandler}>About</a>
                <a href="#Services" onClick={Closinghandler}>Services</a>
                <a href="#Works" onClick={Closinghandler}>Works</a>
                <a href="#Clients" onClick={Closinghandler}>Clients</a>
                <a href="#Contact" onClick={Closinghandler}>Contact</a>
                <div className='p-tag'>
                <p>Perspiciatis hic praesentium nescuint Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. lusto id suscipit veritatis neque reprehenderit</p>
                </div>
                <div className='nav-icons'>
                <p> <FaFacebookF /></p>
                <p> <FaTwitter /></p>
                <p> <FaInstagram /></p>
                <p> <FaFacebookF /></p>
                <p> <FaBehance /></p>
                <p> <FaDribbble /></p>
                </div>
            </div>
            </div></>}
        </nav>
    
  )
}

export default Navbar