import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './subclient.css';
import user1 from '../images/user-01.jpg';
import user2 from '../images/user-02.jpg';
import user3 from '../images/user-05.jpg';

const SubSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        
      };

  return (
    <div className='child_slider_bar'>
      {/* <hr  className='child_hr_tag'/> */}
      <div className='sub_child_slider_bar'>
      <Slider {...settings}>
         <div className='content_item'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem  quas maiores omnis consectetur similique deleniti quibusdam nobis, perferendis labore vitae id, veniam vero accusamus deserunt ducimus quae et praesentium expedita.</p>
             <div className='user_img_details'>
              <img src={user1} alt="" height="100px" width="100px"/>
              <p className='founder-details'>Tim Cook</p>
              <p className='founder-position'>CEO. Apple</p>
             </div>
          </div>
          <div className='content_item'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel odit repellat, provident molestiae et voluptates dolore nihil ea perspiciatis tempore corrupti obcaecati quidem sint animi dolores rerum mollitia quo.</p>
           <div className='user_img_details'>
              <img src={user3} alt="" height="100px" width="100px"/>
              <p className='founder-details'>Sundar pichai</p>
              <p className='founder-position'>CEO.Google</p>
             </div>
          </div>
          <div>
          <div className='content_item'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel odit repellat, provident molestiae et voluptates dolore nihil ea perspiciatis tempore corrupti obcaecati quidem sint animi dolores rerum mollitia quo.</p>
           <div className='user_img_details'>
              <img src={user2} alt="" height="100px" width="100px"/>
              <p className='founder-details'>Satya Nadella</p>
              <p className='founder-position'>CEO. Microsoft</p>
             </div>
          </div>
          </div>
      
        </Slider>
        </div>

    </div>
  )
}

export default SubSlide