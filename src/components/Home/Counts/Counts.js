import React from 'react'
import './Counts.css'
import WebText from '../../../TextData';

function Counts() {
    return (
        <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">

            <div className="row no-gutters">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                <div className="content d-flex flex-column justify-content-center">
                <h3>{WebText.home.counts.title}</h3>
                <p>{WebText.home.counts.description}</p>
                <div className="row">
                    {
                        WebText.home.counts.countsListData.map(e => (
                            <div className="col-md-6 d-md-flex align-items-md-stretch" key={e.title}>
                            <div className="count-box">
                                <i className={e.icon}></i>
                                <span data-toggle="counter-up">{e.counter}</span>
                                <p><strong>{e.title}</strong> {e.description}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}

export default Counts
