import React from 'react';
import './workspage.css';
import image1 from '../images/lady-shutterbug.jpg';
import image2 from '../images/woodcraft.jpg';
import image3 from '../images/the-beetle.jpg';
import image4 from '../images/grow-green.jpg';
import image5 from '../images/guitarist.jpg';
import image6 from '../images/palmeira.jpg'; 
import { FaLink } from "react-icons/fa"; 
import { FaPlus } from "react-icons/fa6";  
const WorksPage = () => {

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
  
  return <>
  <div className='work-content' id='Works'>
    <div className='child_Work_content'>
     <div className='reveal'>
     <h4 className='h4-style'>RECENT WORKS</h4>
     <h1 className='h1-style'>We love what we do, check out <br />
         some of our latest works</h1>
        <h1 className='line-style'></h1>
        </div>
     <div className='main-content reveal'>
       <div className='sub-main-content-1'>
        <div className='image_overlay_box'>
         <img src={image1} alt=""  height="100%" width="100%"/>
         <div className='image_box_overlay'>
          <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'> <FaPlus /></p>
          <p className='item_name'>SHUTTERBUG
          <p className='brand-name'>Branding</p>
          </p>
           </div>
        </div>
        <div className='image_overlay_box'>
        <img src={image3} alt=""   height="100%" width="100%"/>
         <div className='image_box_overlay'>
          <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'> <FaPlus /></p>
          <p className='item_name'>THE BEETLE
          <p className='brand-name'>Web Development</p>
          </p>
           </div>
       </div>
       <div className='image_overlay_box'>
       <img src={image5} alt=""  height="100%" width="100%" />
       <div className='image_box_overlay'>
          <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'> <FaPlus /></p>
          <p className='item_name'>GUITARIST
          <p className='brand-name'>Web Design</p>
          </p>
           </div>
       </div>
       </div>
       <div className='sub-main-content-2'>
        <div className='image_overlay_box'>
        <img src={image2} alt=""  height="100%" width="100%" />
        <div className='image_box_overlay'>
          <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'> <FaPlus /></p>
          <p className='item_name'>WOODCRAFT
          <p className='brand-name'>Web Design</p>
          </p>
           </div>
        </div>
        <div className='image_overlay_box'>
        <img src={image4} alt=""  height="100%" width="100%"/>
        <div className='image_box_overlay'>
          <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'> <FaPlus /></p>
          <p className='item_name'>GROW GREEN
          <p className='brand-name'>Branding</p>
          </p>
           </div>
        </div>
        <div className='image_overlay_box'>
        <img src={image6} alt=""  height="100%" width="100%"/>
        <div className='image_box_overlay'>
         <p className='span_radius'><FaLink /></p>
          <p className='fa_plus_icon'><FaPlus /></p>
          <p className='item_name'>PALMEIRA
          <p className='brand-name'>Web Design</p>
          </p>
           </div>
        </div>
       </div>
       </div>
       </div>
    </div>
     
  </>
}

export default WorksPage