import React from 'react';
import './home.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaBehance} from 'react-icons/fa6';
import {FaDribbble} from 'react-icons/fa';

const Home = () => {

  return (
    <div className='home-grid' id='home'>
        <div className='grid-left'>
        <h3 className='home-h3-tag'>WELCOME TO CLINT</h3>
        <h1 className='home-paragraph'>We are a creative group of people who design influential brands and digital experiences.</h1>
          <div className='home_button_dis'>
          <div className='button-btn-1'><button>START A PROJECT</button></div>
          <div className='button-btn-2'>
         <button>MORE ABOUT US</button> </div>
        </div>
         
        </div>
            <div className='right-grid'>
                <p className='home-icons'> <FaFacebookF /></p>
                <p className='home-icons'> <FaTwitter /></p>
                <p className='home-icons'> <FaInstagram /></p>
                <p className='home-icons'> <FaBehance /></p>
                <p className='home-icons'> <FaDribbble /></p>
           </div>
    
    </div>
  )
}
export default Home