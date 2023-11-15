import React from 'react';
import './contact.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaBehance} from 'react-icons/fa6';
import {FaDribbble} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='conatact_main_container' id='Contact'>
        <div className='contact_us'>
        <h2 className='h2_contact_us'>CONTACT US</h2>
        <p className='p_contact_inner'>Reach out for a new project ot just say hello</p>
        </div>
        <div className='contact_grid_outer'>
            <div className='grid_inner-1'>
                <form>
                  <h2 className='form-title'>SEND US A MESSAGE</h2>
                    <label>Your Name</label>
                    <input type="text" />
                    <label>Your Email</label>
                    <input type="email" />
                    <label>Subject</label>
                    <input type="text" />
                    <label htmlFor="">Your Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className='btn-submit'>SUBMIT</button>
                </form>
            </div>
            <div className='grid_inner_2'>
             <h1 className='conatct_info_heading'>CONTACT INFO</h1>
              <div className='grid_pop_1'>
                <h4 className='h4_tag'>Where To Find Us</h4>
                <p>1600 Amphitheatre Parkway Moutain View. CA 94043 US</p>
              </div>
              <div className='grid_pop_1'>
                <h4 className='h4_tag'>Email Us At</h4>
                <p>Contact@glintsite.com</p>
                <p>info@glintsite.com</p>
              </div>
               <div className='grid_pop_1'>
               <h4 className='h4_tag'>Call Us At</h4>
                <p>Phone:(+63)555 1212</p>
                <p>Mobile:(+63)555 0100</p>
                <p>Fax:(+63)555 0101</p>
               </div>
               <div className='grid_pop_2'>
                <p className='contact-icons'> <FaFacebookF /></p>
                <p className='contact-icons'> <FaTwitter /></p>
                <p className='contact-icons'> <FaInstagram /></p>
                <p className='contact-icons'> <FaBehance /></p>
                <p className='contact-icons'> <FaDribbble /></p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage