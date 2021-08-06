import React from "react";
import "./TeamAbout.css";

const TeamAboutMember = (props) => {
  const { data_aos_delay, img, name, title } = props.member;

  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div
        className="member"
        data-aos="fade-up"
        data-aos-delay={data_aos_delay}
      >
        <div className="member-img">
          <img src={img} className="img-fluid" alt="" />
          <div className="social">
            <a href="/#">
              <i className="icofont-twitter"></i>
            </a>
            <a href="/#">
              <i className="icofont-facebook"></i>
            </a>
            <a href="/#">
              <i className="icofont-instagram"></i>
            </a>
            <a href="/#">
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamAboutMember;
