import React from 'react';
import './App.css';
import Navbar  from './Comp/Navbar';
import Home from './Comp/Home';
import About from './Comp/About';
import ServicePage from './Comp/ServicePage';
import WorksPage from './Comp/WorksPage';
import ClientPage from './Comp/ClientPage';
import ContactPage from './Comp/ContactPage';
import Footer from './Comp/Footer';
import { useState } from 'react';
function App() {
  // let [tops,settops]=useState(false)
  // let navtop={
  //   top:(tops)?"0px":"1px"
  // }
      return (
        <>
       <div>
        <Navbar />
        <Home />
        <About />
        <ServicePage />
        <WorksPage/>
        <ClientPage />
        <ContactPage />
       <Footer />
       {/* <button className='button_scroll_up' style={navtop} onClick={()=>{settops(true)}}>hello</button> */}
       </div>
        </>
  );
}

export default App;
