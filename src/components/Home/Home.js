import React from 'react'
import About from './About/About'
import Client from './Client/Client'
import Features from './Features/Features'

// import Services from './Services/Services'

import CallToAction from './CallToAction/CallToAction'
// import Counts from './Counts/Counts'
// import Testimonials from './Testimonials/Testimonials'
import Team from './Team/Team'
import Slider from './Slider/Slider'
import Portfolio from './Portfolio/Portfolio'
import GraphicsPortfolio from './GraphicsPortfolio/GraphicsPortfolio'
import ApplicationForm from './ApplicationForm/ApplicationForm'
import InputSkills from './ApplicationForm/InputSkills'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import LazyLoad from 'react-lazyload';



function Home() {
    
    return (
        <main id="main">
          <Navbar/>
              <Slider/>
             
            <Portfolio/>
      
            <GraphicsPortfolio/>
           
         
            <ApplicationForm/>
            
           
            
            
            {/*<Services/> */}
            {/* <Portfolio/> */}
            {/* <Counts/> */}
            {/* <Testimonials/>*/}
            <Team/> 
           
            <Footer/>
         
        </main>
    )
}

export default Home
