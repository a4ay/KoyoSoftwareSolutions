import React from 'react'
import './About.css'
import about from '../../../img/about.jpg'
import WebText from '../../../TextData';
import {Jumbotron,Button} from 'react-bootstrap';
function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img src={about} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>{WebText.home.about.introductionHeading}</h3>
                    <p className="font-italic">
                    {WebText.home.about.introductionText}
                    </p>
                    
                    <ul className="ulContent">
                    <li><i className="ri-check-double-line"></i> {WebText.home.about.introductionCheckList1}</li>
                    <li><i className="ri-check-double-line"></i> {WebText.home.about.introductionCheckList2}</li>
                    <li><i className="ri-check-double-line"></i> {WebText.home.about.introductionCheckList3}</li>
                    </ul>
                    <p>
                    {WebText.home.about.introductionEndingText}
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About
