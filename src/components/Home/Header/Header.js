import React from "react";
import "./Header.css";
import HeaderElement from "./HeaderElement";
import WebText from "../../../TextData";
import { HashLink } from "react-router-hash-link";

import WebDesignIcon from "../Images/Web Icon/Web Design icon.svg";
import AIMLIcon from "../Images/Web Icon/AI&ML.svg";
import CodeCampIcon from "../Images/Web Icon/Code Camp icon.svg";
import BrandingSolsIcon from "../Images/Web Icon/Branding Solutions icon.svg";

function Header() {
  const images = [WebDesignIcon, AIMLIcon, CodeCampIcon, BrandingSolsIcon];
  // fetch('https://api.proarif.com/softsite/Home/HeaderElement.json')
  // .then(response => response.json())
  // .then(json => console.log(json))
  var i = 0;
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-8 col-lg-8">
            <h1>{WebText.home.header.heading}</h1>
            <h2>{WebText.home.header.headerText}</h2>
          </div>
        </div>

        <div
          className="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {WebText.home.header.headerCardsData.map((element, index) => (
            <HeaderElement
              key={element.name}
              data={element}
              image={images[i++]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
