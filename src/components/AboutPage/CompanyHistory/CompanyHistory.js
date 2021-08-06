import React from 'react';
import './CompanyHistory.css';
import WebText from '../../../TextData';

const CompanyHistory = () => {
    return (
        <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">

            <div className="text-center">
            <h3>{WebText.aboutPage.companyHistory.heading}</h3>
            <p>{WebText.aboutPage.companyHistory.description}</p>
            <a className="cta-btn" href="/#">{WebText.aboutPage.companyHistory.btnText}</a>
            </div>

        </div>
        </section>
    )
}

export default CompanyHistory
