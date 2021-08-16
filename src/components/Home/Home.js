import React from 'react'

import Header from '../Home/Header/Header'
import Team from './Team/Team'
import Slider from './Slider/Slider'
import Portfolio from './Portfolio/Portfolio'
import GraphicsPortfolio from './GraphicsPortfolio/GraphicsPortfolio'
import ApplicationForm from './ApplicationForm/ApplicationForm'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'



function Home() {
    
    return (
        <main id="main">
          <Navbar/>
          <Header/>
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
