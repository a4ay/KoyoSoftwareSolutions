import React from 'react';
import WebText from '../../../TextData';

const WebDevelopment = () => {
    
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.webDevelopmentPage.title}</h2>
                <p>{WebText.webDevelopmentPage.description}</p>
            </div>
        </section>
    );
}

export default WebDevelopment;
