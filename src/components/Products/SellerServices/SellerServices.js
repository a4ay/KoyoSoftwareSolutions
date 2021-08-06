import React from 'react';
import WebText from '../../../TextData';

const SellerServices = () => {
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.sellerServicesPage.title}</h2>
                <p>{WebText.sellerServicesPage.description}</p>
            </div>
        </section>
    );
}

export default SellerServices;
