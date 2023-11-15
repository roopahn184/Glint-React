import React from 'react';
import SubClientPage from './SubClientPage';
import SubSlide from './SubSlide';
import './clientpage.css';

const ClientPage = () => {
 

  return <>
  <div className='client_page_container' id='Clients'>
    <div className='bg-1'>
    <SubClientPage />
    </div>
    <div className='bg-2'>
    <SubSlide />
    </div>
  </div>
 </>
}

export default ClientPage