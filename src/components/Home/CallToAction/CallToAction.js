import React from 'react'
import './CallToAction.css'
import WebText from '../../../TextData'

function CallToAction() {
    return (
        <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">

            <div className="text-center">
            <h3>{WebText.home.CallToActionData.heading}</h3>
            <p>{WebText.home.CallToActionData.description}</p>
            <a className="cta-btn" href="/#">{WebText.home.CallToActionData.btnText}</a>
            </div>

        </div>
        </section>
    )
}

export default CallToAction
