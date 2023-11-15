import React from 'react';
import './servicepage.css';
import {AiOutlineFormatPainter} from 'react-icons/ai';
import {AiOutlineGateway} from 'react-icons/ai';
import {AiOutlineNotification} from 'react-icons/ai';
import {MdOutlinePublic} from 'react-icons/md';
import {MdOutlineCalendarToday} from 'react-icons/md';

const ServicePage = () => {
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
    <div className='text-animation top-content' id='Services'>
        <div className='reveal'>
        <h4 className='h4-tag-animatioin'>WHAT WE DO</h4>
        <h2 className='h2-tag-animatioin'>We've got everything you need to <br /> launch and grow your business</h2>
        </div>
        <div className='service-grid-container'>
            <div className='user-1-grid reveal'>
                <div className='display-content'>
                <span className='icons-style'> <AiOutlineFormatPainter /></span>
                <h1 className='h1-brand'>Brand Identity</h1>
                </div>
                <p className='p-tag-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus ratione officia reiciendis vel architecto adipisci, asperiores temporibus delectus tempore amet quod expedita corrupti optio, debitis distinctio quam dolores eligendi?</p>
            </div>
            <div className='reveal'>
            <div className='display-content'>
            <span className='icons-style'>< AiOutlineGateway /></span>
            <h1 className='h1-brand'>IIIustration</h1>
            </div>
            <p className='p-tag-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus ipsa iusto maxime eaque, sed odit. Excepturi velit sit deserunt alias consequuntur nihil veniam praesentium deleniti mollitia eaque. Sint, perspiciatis magni!</p>
            </div>
            <div className='reveal'>
                <div className='display-content'>
                <span className='icons-style'><AiOutlineNotification/></span>
                <h1 className='h1-brand'>Marketing</h1>
                </div>
                <p className='p-tag-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis a labore, nulla omnis maiores aperiam itaque, ducimus esse voluptatem eos, sunt voluptatum ratione non animi soluta consequatur? Nesciunt, fugit consequatur.</p>
            </div>
            <div className='reveal'>
                <div className='display-content'>
                <span className='icons-style'><MdOutlinePublic /></span>
                <h1 className='h1-brand'>Web Design</h1>
                </div>
                <p className='p-tag-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolorum voluptatibus, excepturi neque exercitationem sit ab quod rem illo, libero alias explicabo soluta voluptate blanditiis, accusantium praesentium ullam perferendis incidunt?</p>
            </div>
            <div className='reveal'> 
                <div className='display-content'>
                <span className='icons-style'>< AiOutlineGateway /></span>
                <h1 className='h1-brand'>Packaging Design</h1>
                </div>
                <p className='p-tag-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, accusantium quam vero dolore amet laborum enim hic totam, dignissimos aspernatur distinctio sint corrupti vel sequi rem praesentium consectetur non unde!</p>
            </div>
            <div className='reveal'>
                <div className='display-content'>
                <span className='icons-style'>< MdOutlineCalendarToday /></span>
                <h1 className='h1-brand'>Web Development</h1>
                </div>
                <p className='p-tag-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt totam debitis ad soluta iure maxime nostrum dolorem, suscipit sunt, saepe repellendus harum dolorum magnam minus accusantium. Maiores, molestiae dolore!</p>
            </div>
        </div>
    </div>
  )
}

export default ServicePage