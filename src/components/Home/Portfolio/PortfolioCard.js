import { Category } from "@material-ui/icons";
import React from "react";
import WebText from "../../../TextData";
import Flip from "../Images/flip.png";
import WhatsApp from "../Images/whatsapp.svg";
import Email from "../Images/email.svg";
import Call from "../Images/call.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";

function PortfolioCard(props) {
  console.log(props);
  var category = WebText.home.portfolio.portfolioListData[props.i].category;
  var img = WebText.home.portfolio.portfolioListData[props.i].img;
  var link = WebText.home.portfolio.portfolioListData[props.i].link;
  var description =
    WebText.home.portfolio.portfolioListData[props.i].description;
  var technologies =
    WebText.home.portfolio.portfolioListData[props.i].technologies;
  var hosting = WebText.home.portfolio.portfolioListData[props.i].hosting;

  return (
    <div id="flip-card">
      <div className="flip-card-front">
        <img
          src={img}
          style={{ height: "100%", width: "100%", borderRadius: "8px" }}
          alt=""
        />
        <a href={link} rel="noopener noreferrer" target="_blank">
          <button type="button" id="flip-btn-load1" className="btn">
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
          {description}
          <div id="downn">
            <br />
            <b>Technologies:</b>
            {technologies}
            <br />
            <b>Hosting:</b>
            {hosting}
            <br />
            <b>Find Out More:</b>
            <img className="contactpic" src={WhatsApp} alt="" />{" "}
            <img className="contactpic" src={Email} alt="" />{" "}
            <img className="contactpic" src={Call} class="img-fluid" alt="" />
          </div>
        </p>
        <img
          src={img}
          style={{
            height: "100%",
            width: "100%",
            opacity: "0.3",
            borderRadius: "8px",
          }}
          alt=""
        />

        <button id="flip-card-btn-turn-to-front">
          <img src={Flip} class="img-fluid" alt="" />
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;
