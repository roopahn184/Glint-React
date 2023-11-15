import React from 'react';
import './footer.css';
import footerLogo from '../images/logo-footer.png..webp';
import footerEmail from '../images/email-icon.png..webp';
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import Home from './Home';
import { useEffect } from 'react';


const Footer = () => {

  let updateHandler=()=>{
    console.log("dgjsf")
  }


  return (
    <div className='flex-footer-outer'>
        <div className='flex_footer_inner_1'>
            <img src={footerLogo} alt="" height="25px" width="100px" />
            <p className='p-footer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis inventore culpa debitis aliquam ad voluptas <br /> vel sequi placeat a! Error  nemo sapiente labore sint sit <br /> repellat nesciunt perferendis quasi pariatur?</p>
        </div>
        <div  className='flex_footer_inner_2'>
            <h4 className='footer-h4'>Get Notified</h4>
           <p className='p-footer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Perferendis inventore culpa debitis aliquam ad voluptas <br /> </p> 
           <div className='sub-flex'>
          
             <p className='email_img'> <img src={footerEmail} alt="" height="15px" width="25px" />
                Email Address</p>
             <button className=' button_btn'>SUBSCRIBE</button>
        </div>
      {/* <div className='button_scroll_up' onClick={()=>{console.log("first")}}>hellhho</div> */}
            

        </div>
    </div>
  )
}

export default Footer