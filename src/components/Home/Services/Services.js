import React from 'react'
import './Services.css'
import ServiceTemplate from './ServiceTemplate'
import WebText from '../../../TextData';

function Services() {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <p>Check our Services</p>
                </div>

                <div className="row">

                    {
                         WebText.home.servicesListData.map(item => <ServiceTemplate key={item.title} item={item} />)
                    }

                </div>

            </div>
        </section>
    )
}

export default Services
