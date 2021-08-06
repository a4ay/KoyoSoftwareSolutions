import React from "react";
import "./Team.css";

const Team = (props) => {
  const { data_aos_delay, img, name, title, description } = props.member;

  return (
    <div className="col-lg-4 col-md-6 mt-4 d-flex align-items-stretch teamm">
      <div className="member-img">
        <img
          src={img}
          style={{ width: "100%" }}
          className="img-fluid teamim"
          alt=""
        />

        <div
          className="member"
          data-aos="fade-up"
          data-aos-delay={data_aos_delay}
        >
          <div className="social">
            {/* <a href="/#"><i className="icofont-twitter"></i></a> */}
            {/* <a href="/#"><i className="icofont-facebook"></i></a> */}

            <a href="/#">
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-body border-top-0">
            <div className="head">
            <h5 className="card-title border-top-0">{name}</h5>
            <h6 className="card-subtitle mb-2 ">{title}</h6>
            </div>
            
            <div className="cardsocial">
              <a href="/#" class="card-link">
                <i className="icofont-envelope"></i>
              </a>
              <a href="/#" class="card-link">
                <i className="icofont-linkedin"></i>
              </a>
            </div>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
