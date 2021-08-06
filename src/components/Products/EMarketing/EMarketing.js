import React from 'react';
import WebText from '../../../TextData';

const EMarketing = () => {
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.eMarketingPage.title}</h2>
                <p>{WebText.eMarketingPage.description}</p>
            </div>
        </section>
    );
}

export default EMarketing;
