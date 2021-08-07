import React from "react";
import "./GraphicsPortfolio.css";
import WebText from "../../../TextData";
import close from "../Images/cross_gallery.png";
import whatsapp from "../../../img/wa_icon.png";
import instagram from "../../../img/instagram_icon.png";
import telegram from "../../../img/telegram_icon.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Marquee from "react-fast-marquee";

import { Autoplay } from "swiper";
/* eslint-env jquery */

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function bro(id, alter) {
  var img;
  var modalImg = document.getElementById("img01");
  img = document.getElementById(id);

  modalImg.src = alter;
  console.log(modalImg.src);
  var modal = document.getElementById("mydiv");

  modal.style.display = "flex";
}

function Open() {
  var modal = document.getElementById("mydiv");
  modal.style.display = "none";
}

function GraphicsPortfolio() {
  return (
    <>
      <div className="Graphics" id="brandingsols">
        <div id="mydiv" className="mydivclass">
          <div className="modalcontainer">
            <img className="modal-content" id="img01" src={telegram} alt="" />
            <img src={close} onClick={Open} className="closee" alt="" />
            <div className="overlaygraphics">
              <div className="textgraphicstitle">
                Busy Morning Coffee{" "}
                <a target="_blank" href="https://wa.me/919867910690">
                  <img className="graphicsocial" src={whatsapp} alt="" />
                </a>
                <a target="_blank" href="https://t.me/MAKE05">
                  <img className="graphicsocial" src={telegram} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/amit.agarwal.1426">
                  <img className="graphicsocial" src={instagram} alt="" />
                </a>
              </div>
              <div className="textgraphicsdescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas vitae scel\ erisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus imperdiet, nulla et
                dictum interdum,
              </div>
            </div>
          </div>
        </div>

        <div className="graphicscontainer " data-aos="fade-up">
          <div className="graphic section-title">
            <h2>{WebText.home.graphicsportfolio.title}</h2>
            <p>{WebText.home.graphicsportfolio.description}</p>
            <div className="hiringtext1">
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </div>
          </div>

          <div className="desktopgraphics">
            <div className="graphicsflexcontainer">
              {WebText.home.graphicsportfolio.graphicsportfolioListData.map(
                (graphics) => (
                  <div className=" first">
                    <div className="left">
                      <h2 className="category">{graphics.category}</h2>

                      {graphics.galleryData.map((gallery) => (
                        <img
                          className={gallery.class}
                          id={gallery.id}
                          src={gallery.img}
                          onClick={(e) => bro(e.target.id, gallery.altersrc)}
                          alt=""
                          title="This is image"
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mobilegraphics">
            <div className="graphicsflexcontainer">
              <Marquee
                pauseOnClick={true}
                gradient={false}
                speed={"30"}
                style={{ paddingBottom: "3%" }}
              >
                <div align="center" className="marqueefilters">
                  <button className="filter-button" data-filter="banner">
                    Banner{" "}
                  </button>
                  ●
                  <button className="filter-button" data-filter="brochure">
                    Brochure{" "}
                  </button>
                  ●
                  <button className="filter-button" data-filter="logo">
                    Logo{" "}
                  </button>
                  ●
                  <button className="filter-button" data-filter="merch">
                    Merchandise Art{" "}
                  </button>
                  ●
                  <button className="filter-button" data-filter="vinyl">
                    Vehicle Vinyl Wrap{" "}
                  </button>
                  ●
                  <button className="filter-button" data-filter="misc">
                    Miscellaneous{" "}
                  </button>
                  ●
                </div>
              </Marquee>

              {WebText.home.graphicsportfolio.graphicsportfolioListData.map(
                (graphics) => (
                  <div className={graphics.mobilefilter}>
                    <div className=" first">
                      <div className="left">
                        <h2 className="category">{graphics.category}</h2>

                        {graphics.galleryData.map((gallery) => (
                          <img
                            className={gallery.class}
                            id={gallery.id}
                            src={gallery.img}
                            onClick={(e) => bro(e.target.id, gallery.altersrc)}
                            alt=""
                            title="This is image"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphicsPortfolio;
