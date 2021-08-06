import React from 'react';
import './ContactAbout.css';

const ContactAboutTemplate = (props) => {
    const {classAdd, data_aos_delay, icon, title, description} = props.item
    const divClass = `col-lg-4 col-md-6 d-flex align-items-stretch ${classAdd}`
    const iconClass = `bx ${icon}`
    return (
        
        <div className={divClass} data-aos="zoom-in" data-aos-delay={data_aos_delay}>
            <div className="icon-box">
            <div className="icon"><i className={iconClass}></i></div>
            <h4><a href="/#">{title}</a></h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default ContactAboutTemplate;
