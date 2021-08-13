import React from "react";
import "./Portfolio.css";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import Flip from "../Images/flip.png";
import WhatsApp from "../Images/whatsapp.svg";
import Email from "../Images/email.svg";
import Call from "../Images/call.png";
import WebText from "../../../TextData";
import PortfolioCard from "./PortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";

/* eslint-env jquery */

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Portfolio() {
  SwiperCore.use([Autoplay]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slideswebsite1 = [];
  const slideswebsite2 = [];
  const slideswebsite3 = [];
  const slideswebsite4 = [];
  const slideswebsite5 = [];
  const slideswebsite6 = [];
  const slideswebsite7 = [];
  const slideswebsite8 = [];
  var i;
  for (i = 0; i < WebText.home.portfolio.portfolioListData.length; i++) {
    console.log(WebText.home.portfolio.portfolioListData[i].title);
    console.log(WebText.home.portfolio.portfolioListData[i].category);

    if (
      WebText.home.portfolio.portfolioListData[i].category === "filter-latest"
    ) {
      slideswebsite1.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category ===
      "filter-restaurant"
    ) {
      slideswebsite2.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category ===
      "filter-realestate"
    ) {
      slideswebsite3.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category === "filter-ngo"
    ) {
      slideswebsite4.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category ===
      "filter-portfolio"
    ) {
      slideswebsite5.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category ===
      "filter-ecommerce"
    ) {
      slideswebsite6.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category === "filter-petcare"
    ) {
      slideswebsite7.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    } else if (
      WebText.home.portfolio.portfolioListData[i].category ===
      "filter-professional"
    ) {
      slideswebsite8.push(
        <SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li">
          <PortfolioCard i={i} />
        </SwiperSlide>
      );
    }
  }

  return (
    <>
      <section className="portfolio" id="webportfolio" >
        <div className="port-container" data-aos="fade-up">
          <div style={{ paddingLeft: "7%" }} className="section-title">
            <h2>{WebText.home.portfolio.title}</h2>
            <p>{WebText.home.portfolio.description}</p>
            <div className="hiringtext1">
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="adj col-lg-12 d-flex justify-content-center">
              <ul id="app-flters">
                <li data-filter=".filter-latest" className="filter-activee">
                  Latest
                </li>
                <li
                  data-filter=".filter-restaurant"
                  title="Bakery, Cafe, Catering, Food Trucks, Restaurant"
                >
                  Restaurant
                </li>
                <li
                  data-filter=".filter-realestate"
                  title="Construction, Modular housing, Turnkey Projects"
                >
                  Real Estate
                </li>
                <li
                  data-filter=".filter-ngo"
                  title="Animal Care, Environment, Poverty Alleviation, Human Rights"
                >
                  NGO
                </li>
                <li
                  data-filter=".filter-portfolio"
                  title="Blog, CV, Advertisement, Artist, Printing"
                >
                  Portfolio
                </li>
                <li
                  data-filter=".filter-ecommerce"
                  title="Clothing, Dried Fruits, NGO, Restaurant"
                >
                  eCommerce
                </li>
                <li data-filter=".filter-petcare">Pet Care</li>
                <li
                  data-filter=".filter-professional"
                  title="Accountant, Lawyer, Educator"
                >
                  Professional
                </li>
              </ul>
            </div>
          </div>
          <div className="desktopportfolio">
            <div
              className=" app-container "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {WebText.home.portfolio.portfolioListData.map((port) => (
                <div className={`app-item ${port.category}`}>
                  <div id="flip-card">
                    <div className="flip-card-front">
                      <img
                        src={port.img}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                          
                        }}
                        alt=""
                      />
                      <a
                        href={port.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button
                          type="button"
                          id="flip-btn-load1"
                          className="btn"
                        >
                          Demo
                        </button>
                      </a>
                      <button id="flip-card-btn-turn-to-back">
                        {" "}
                        <img src={Flip} class="img-fluid" alt="" />
                      </button>
                    </div>

                    <div className="flip-card-back">
                      <p>
                        {port.description}
                        <div id="downn">
                          <br />
                          <b>Technologies:</b>
                          {port.technologies}
                          <br />
                          <b>Hosting:</b>
                          {port.hosting}
                          <br />
                          <b>Find Out More:</b>
                          <a href=" https://api.whatsapp.com/send/?phone=+91 98679 10690&text&app_absent=0" target="_blank">

                          <i class="bi bi-whatsapp" style={{color: "#EE920D",fontSize:"16px",marginLeft:"10px",marginTop:"3px" }}></i>
                          </a>
                          <a href=" https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#">
                          <i class="bi bi-envelope" style={{color: "#EE920D",fontSize:"16px",marginLeft:"10px" }}></i>
                          </a>
                          <a href="tel:+919867910690" target="_blank">
                          <i class="bi bi-telephone" style={{color: "#EE920D",fontSize:"16px",marginLeft:"10px" }}></i>
                          </a>

                        </div>
                      </p>
                      <img
                        src={port.img}
                        style={{
                          height: "100%",
                          width: "100%",
                          opacity: "0.15",
                          borderRadius: "8px",
                        }}
                        alt=""
                      />

                      <button id="flip-card-btn-turn-to-front">
                        <img src={Flip} class="img-fluid" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mobileportfolio mobapp-container"
            id="mobileportfolio"
          >
            <Swiper
              data-aos="fade-up"
              className="box filter-latest mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite1}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-restaurant mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite2}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-realestate mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite3}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-ngo mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite4}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-portfolio mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite5}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-ecommerce mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite6}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-petcare mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite7}
            </Swiper>

            <Swiper
              data-aos="fade-up"
              className="box filter-professional mobapp-item websiteslider"
              autoplay={{ delay: 1500 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              effect="fade"
              navigation
              spaceBetween={10}
              speed={1000}
              onInit={(swiper) => console.log("Swiper initialized!", swiper)}
              onSlideChange={(swiper) => {
                console.log("Slide index changed to: ", swiper.activeIndex);
              }}
              onReachEnd={() => console.log("Swiper end reached")}
            >
              {slideswebsite8}
            </Swiper>

          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
