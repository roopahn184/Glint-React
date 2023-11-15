import React from 'react';
import Slider from 'react-slick';
import './subclient.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import apple from "../images/apple.png.webp";
import atom from "../images/atom.png.webp";
import blackberry from "../images/blackberry.png.webp";
import dropbox from "../images/dropbox.png.webp";
import envato from "../images/envato.png.webp";
import firefox from "../images/firefox.png.webp";
import joomla from "../images/joomla.png.webp";
import magento from "../images/magento.png.webp";
const SubClientPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll:4,
        
      };

  return <>
       <div  className='main-container' >
        <h4 className='main_h4_heading'>OUR CLIENTS</h4>
        <h5 className='main_h5_heading'>Glint has been honored to partner <br /> up with these clients</h5>
        <Slider {...settings}>
          <div className='item-grid'>
         <img  src={apple } alt=""  height="40%" width="70%"/>
          </div>
          <div>
            <img className='item-grid' src={atom} alt=""  height="40%" width="70%" />
          </div>
          <div>
            <img className='item-grid' src={blackberry} alt=""  height="40%" width="70%" />
          </div>
          <div>
           <img className='item-grid' src={dropbox} alt=""  height="40%" width="70%"/>
          </div>
          <div>
           <img className='item-grid' src={envato} alt="" height="40%" width="70%" />
          </div>
          <div>
          <img className='item-grid' src={firefox} alt=""  height="40%" width="70%" />
          </div>
          <div>
          <img className='item-grid' src={joomla} alt=""  height="40%" width="70%"  />
          </div>
          <div>
          <img className='item-grid' src={magento} alt=""  height="40%" width="70%"/>
          </div>
          <div>
          <img className='item-grid' src={apple } alt=""  height="40%" width="70%"/>
          </div>
          <div>
            <img className='item-grid' src={atom} alt=""  height="40%" width="70%"/>
          </div>
          <div>
            <img className='item-grid' src={blackberry} alt=""  height="40%" width="70%" />
          </div>
          <div>
           <img className='item-grid' src={dropbox} alt=""  height="40%" width="70%" />
          </div>
          <div>
           <img className='item-grid' src={envato} alt=""  height="40%" width="70%"/>
          </div>
        </Slider>
        </div>
  
 </>
}

export default SubClientPage