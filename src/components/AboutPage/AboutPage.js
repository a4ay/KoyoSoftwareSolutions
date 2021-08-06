import React from 'react'
import './AboutPage.css'
import ContactAbout from './ContactAbout/ContactAbout'
import TeamAbout from './TeamAbout/TeamAbout'
import CompanyHistory from './CompanyHistory/CompanyHistory'
import WebText from '../../TextData'
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="sidenavAbout">
                        <a href="#about">{WebText.aboutPage.leftSidebar.item1}</a>
                        <a href="#services">{WebText.aboutPage.leftSidebar.item2}</a>
                        <a href="#clients">{WebText.aboutPage.leftSidebar.item3}</a>
                        <a href="#contact">{WebText.aboutPage.leftSidebar.item4}</a>
                        <a href="#services">{WebText.aboutPage.leftSidebar.item5}</a>
                        <a href="#clients">{WebText.aboutPage.leftSidebar.item6}</a>
                        <a href="#contact">{WebText.aboutPage.leftSidebar.item7}</a>
                    </div>

                    <div className="mainAbout">
                        <ContactAbout/>
                        <CompanyHistory/>
                        <TeamAbout/>
                        
                        <Link to='/join'>
                            <div className="container text-right joinDivAbout">
                                <button type="submit" className="joinBtnAbout">
                                    {WebText.aboutPage.joinBtn.btnText}
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
