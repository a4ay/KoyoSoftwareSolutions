import React from 'react'
import './HeaderForAll.css'


function HeaderForAll(props) {
    return (
        <section id="hero1" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div className="col-xl-6 col-lg-8">
                <h1>{props.title} </h1>
                <h2>{props.description}</h2>
                </div>
            </div>

            </div>
        </section>
    )
}

export default HeaderForAll