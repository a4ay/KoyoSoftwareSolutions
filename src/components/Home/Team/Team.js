import React from 'react'
import './Team.css'
import TeamMember from './TeamMember'
import WebText from '../../../TextData';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import AIML from '../../../img/AIML.webp';
import { Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


function Team() {



    SwiperCore.use([Autoplay])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const slidesteam = [];

    var i = 1
    for (i = 0; i < 3; i++) {


        slidesteam.push(

            <SwiperSlide data-aos-delay="100" id="c" key={`slidesteam-${i}`} tag="li" >

                <div className="col-lg-4 col-md-6 mt-4 d-flex align-items-stretch teamm">

                    <div className="member-img">
                        <img src={WebText.home.team.teamListData[i].img} style={{ width: '100%' }} className="img-fluid teamim" alt="" />
                        <div className="member" data-aos="fade-up" >
                            <div className="social">
                                {/* <a href="/#"><i className="icofont-twitter"></i></a> */}
                                {/* <a href="/#"><i className="icofont-facebook"></i></a> */}

                                <a href="/#"><i className="icofont-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="card border-top-0" >
                            <div className="card-body border-top-0">
                                <div className="mob-head">
                                <h5 className="card-title">{WebText.home.team.teamListData[i].name}</h5>
                                <h6 className="card-subtitle mb-2 ">{WebText.home.team.teamListData[i].title}</h6>
                                </div>
                                
                                <div className="cardsocial">
                                    <a href="/#" class="card-link"><i className="icofont-envelope"></i></a>
                                    <a href="/#" class="card-link"><i className="icofont-linkedin"></i></a>
                                </div>
                                <p className="card-text">{WebText.home.team.teamListData[i].description}
                                </p>

                            </div>
                        </div>

                    </div>
                </div>




            </SwiperSlide>

        );
    }











    return (
        <section id="team" className="team">
            <div id="c" className="checkteam-container" data-aos="fade-up">

                <div className="section-title">
                    <h2>{WebText.home.team.title}</h2>
                    <p>{WebText.home.team.description}</p>
                </div>
                <div className="teamdesktop">
                    <div className="row">

                        {
                            WebText.home.team.teamListData.map(member => <TeamMember key={member.title} member={member} />)
                        }
                    </div>
                </div>
                <div className="teammobile">
                    <Swiper
                        data-aos="fade-up"
                        className="teamwrapper"
                        autoplay={{ delay: 2000 }}
                        thumbs={{ swiper: thumbsSwiper }}
                        controller={{ control: controlledSwiper }}
                        tag="section"
                        effect="fade"
                        spaceBetween={10}
                        speed={1000}

                    >
                        {slidesteam}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Team
