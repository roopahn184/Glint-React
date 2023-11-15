import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './about.css';
// import CountUp from 'react-countup';

const About = () => {

  window.addEventListener('scroll', reveal);

  function reveal(){
   var reveals = document.querySelectorAll('.reveal');
   for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active')
      } 
      else{
         reveals[i].classList.remove('active')
      }
   }
  }

  return (

    <div className='about-content' id='about'>
      <div className='reveal'>
        <h5 className='h5-tag'>HELLO THERE</h5>
        <h1 className='h1-tag'>We Are Glint</h1>
         <p className='hr-line'></p>
        <p className='para-tag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe repudiandae <br />  non placeat dignissimos doloribus ad hic animi, nesciunt dolor voluptatem  <br />  obcaecati vel ex rem consequatur  modi est optio  aperiam similique. Lorem <br />
        ipsum dolor, sit amet consectetur adipisicing elit. Quas reprehenderit, nulla.</p>
        </div>
        <div className='increment-count reveal' >
         <div className='count-one'>
            {/* <CountUp end={127}  duration={2} /> */}
            <p className='list-items'>Awards Recieved</p>
         </div>
         <div className='count-two'>
           
            <p className='list-items'>Cups of Coffee</p>
         </div>
         <div className='count-three'>
          
            <p className='list-items'>Projects Completed</p>
         </div>
         <div className='count-four'>
            <p className='list-items'>Happy Clients</p>
         </div>
        </div>
    </div>
  )
}

export default About