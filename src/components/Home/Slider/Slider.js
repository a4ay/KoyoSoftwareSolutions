import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';
import WebText from '../../../TextData';
import { Autoplay } from 'swiper';

import AIML from '../../../img/AIML.webp';
import WebDesign from '../../../img/WebDesign.webp';
import CodeCamp from '../../../img/CodeCamp.webp';
import BrandingSols from '../../../img/BrandingSols.webp';


import WebDesignMob from '../../../img/WebDesignMob.webp';
import AIMLMob from '../../../img/AIMLMob.webp';
import CodeCampMob from '../../../img/CodeCampMob.webp';
import BrandingSolsMob from '../../../img/BrandingSolsMob.webp';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);




function Slider() {

  SwiperCore.use([Autoplay])
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];

  var i = 1
  for (i = 0; i < 4; i++) {
    console.log(WebText.home.featuresListData[i].title);

    slides.push(

      <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li" >



        <div className=" sliderheading" >{WebText.home.featuresListData[i].title}</div>
        <div className="wrapper">

          <div id="column1" >

            <img className="responsive"

              src={WebText.home.featuresListData[i].img}

              alt={`Slide ${i}`}


            />
            <img className="responsive_mob"

              src={WebText.home.featuresListData[i].imgmob}

              alt={`Slide ${i}`}


            />



          </div>


          <div id="column2" >
            {WebText.home.featuresListData[i].description}
          </div></div></SwiperSlide>

    );
  }





  return (
    <React.Fragment >
      <br />
      <div className="slider">
        <Swiper
          data-aos="fade-up"
          className="box"


          autoplay={{ delay: 4000 }}
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"

          effect="fade"
          navigation

          pagination
          spaceBetween={10}

          speed={1000}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}





        >
          {slides}
        </Swiper>


      </div>


    </React.Fragment>
  );
};

export default Slider;










