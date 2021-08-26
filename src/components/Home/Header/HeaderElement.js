import React, {useState} from "react";
import "./Header.css";
import Manager from '../../../Utils/SessionManager';
import { HashLink as Link } from "react-router-hash-link";
import "../Images/Web Icon/Web Design icon.svg";
const HeaderElement = (props) => {
  const { classBox, icon, name, smooth} = props.data;
  const yOffset=(smooth=="#brandingsols")?-70:-10;
  const classAdd = "col-xl-2 col-md-4 col-6 " + classBox;
  const link = props.link;
  const image = props.image;
  const scrollWidthOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
    <div className={classAdd}>
      <div className="icon-box">
        <img src={image} alt="icon" />
        {/*  <i className={icon}></i><h3><a href={'#'+link}>{name}</a></h3>*/}
        <h3>
          <Link
            className="link"
            smooth
            to={smooth}
            onClick={()=>{
              if(name==='AI and ML'||name==='Learn and Code'){
                Manager.showPopUp(name);
              }
            }}
            scroll={(el) => scrollWidthOffset(el)}
          >
            {name}
          </Link>
        </h3>
      </div>
    </div>
    </>
  );
};

export default HeaderElement;
