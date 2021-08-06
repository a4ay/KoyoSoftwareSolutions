import React from 'react';
import './ContactAbout.css';
import ContactAboutTemplate from './ContactAboutTemplate';
import WebText from '../../../TextData';

const ContactAbout = () => {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>{WebText.aboutPage.contactAbout.title}</h2>
                <p>{WebText.aboutPage.contactAbout.description}</p>
                </div>

                <div className="row">

                    {
                        WebText.aboutPage.contactAbout.data.map(item => <ContactAboutTemplate key={item.title} item={item} />)
                    }

                </div>

            </div>
        </section>
    )
}

export default ContactAbout;
