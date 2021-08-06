import React from 'react';
import WebText from '../../../TextData';

const ProfessionalsToolbox = () => {
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.professionalsToolboxPage.title}</h2>
                <p>{WebText.professionalsToolboxPage.description}</p>
            </div>
        </section>
    );
}

export default ProfessionalsToolbox;
