import React from 'react';
import WebText from '../../../TextData';

const MachineLearning = () => {
    return (
        <section className="container" data-aos="fade-up">
            <div className="section-title" style={{margin: '50px 0px'}}>
                <h2>{WebText.machineLearningPage.title}</h2>
                <p>{WebText.machineLearningPage.description}</p>
            </div>
        </section>
    );
}

export default MachineLearning;
