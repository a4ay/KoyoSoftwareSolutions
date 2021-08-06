import React from 'react';
import WebText from '../../../TextData';

const BusinessProductivityServices = () => {
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.businessProductivityServicesPage.title}</h2>
                <p>{WebText.businessProductivityServicesPage.description}</p>
            </div>
        </section>
    );
}

export default BusinessProductivityServices;
