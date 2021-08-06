import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button, Modal, Nav } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import PopupModal from "react-modal";
// import firebaseConfig from '../../firebase.config';
import logo from "../../../img/logo/KoyoLogo.png";
import facebook from "../../../img/social/facebook.png";
import google from "../../../img/social/google.png";
import twitter from "../../../img/social/twitter.png";
import linkedIn from "../../../img/social/linkedin.png";
// import logout from '../../img/social/logout.png'
import WebText from "../../../TextData";
// import { NavItem } from "react-bootstrap";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = 10;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
const scrollWidthOffset2 = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Navbar1 = (props) => {
  const [show, setShow] = useState(false);
  const [menu,setMenu] = useState(false);
  const handleMenu=()=>{
    if(menu)
      document.getElementById("navbarNav").style.display = "none";
    else
      document.getElementById("navbarNav").style.display = "block";
    setMenu(!menu);
    
  }
  
  
  // user from local storage
  let ttsGoogleSignIn = localStorage.getItem("ttsGoogleSignIn");
  const [checked, setChecked] = useState(true);

  const [user, setUser] = useState({
    googleSignIn: false,
    linkedInSignIn: false,
    name: "",
    email: "",
    photo: "",
  });
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  // useEffect(() => {
  if (ttsGoogleSignIn && checked) {
    setUser({
      googleSignIn: true,
      linkedInSignIn: false,
      name: localStorage.getItem("ttsUsername"),
      email: localStorage.getItem("ttsEmail"),
      photo: localStorage.getItem("ttsPhoto"),
    });
    setChecked(false);
    console.log(user);
  }
  // }, ttsGoogleSignIn)

  const handleSignInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        // console.log(result.user);
        const signInUserGoogle = {
          googleSignIn: true,
          linkedInSignIn: false,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signInUserGoogle);
        // set user to local storage
        localStorage.setItem("ttsGoogleSignIn", true);
        localStorage.setItem("ttsUsername", displayName);
        localStorage.setItem("ttsEmail", email);
        localStorage.setItem("ttsPhoto", photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  const handleSignOutGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUserGoogle = {
          googleSignIn: false,
          linkedInSignIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signOutUserGoogle);
        // remove all from local storage
        // localStorage.clear();

        // remove user from local storage
        localStorage.removeItem("ttsGoogleSignIn");
        localStorage.removeItem("ttsUsername");
        localStorage.removeItem("ttsEmail");
        localStorage.removeItem("ttsPhoto");
      });
    // .catch(err =>{})
  };

  const handleModel = () => {
    setShow(!show);
  };
  // const handleModel2 = () => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 5000);
  //   handleModel();
  // };
  // const [isHideNav, setIsHideNav] = useState(true)
  
  const nav2Active = () => {
    // if (clickedNav) {
    //     setClickedNav(false)
    // } else {
    //     setClickedNav(true)
    // }

    document.getElementById("navbarNav").style.display = "block";
    // setIsHideNav(false)
  };
  // const handleDropdown=()=>{
  //   document.getElementsByClassName(dropdown-menu).style.display="none";
  // }

  const nav2Deactive = () =>{
    (document.getElementById("navbarNav").style.display = "none");
    setMenu(false);
  }
    

  // useState(() => {
  //     if (clickedNav === true) {
  //         document.getElementById("header").className='navActive'
  //     } else {
  //         document.getElementById("header").className="navDeactive"
  //     }
  // }, [clickedNav])

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // useEffect(() => {
  //   if (show) {
  //     setTimeout(() => {
  //       handleModel();
  //     }, 5);
  //   }
  // }, []); // if (offset>20) document.getElementById('navbarNav').style.height = '20px';

  window.addEventListener(
    "scroll",
    () => {
      document.getElementById("navbarNav").style.display = "none";
    },
    true
  );

  //     // setIsHideNav(false)
  // } else {
  //     document.getElementById('navbarNav').style.display = 'block';
  // }bbb

  const [modalIsOpen33, setIsOpen33] = useState(false);
  function closeModal33() {
    setIsOpen33(false);
  }

  function openModal33() {
    console.log("god");

    setIsOpen33(true);
  }
  const [modal4,setModal4]=useState(true)
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex justify-content-between">
        {/* toggle button */}
        <p>
          <button
            id="navBtn"
            className="navbar-toggler d-block d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginTop: "11px" }}
            onClick={handleMenu}
          >
            <div className="toggleIcon"></div>
            <div className="toggleIcon"></div>
            <div className="toggleIcon"></div>
          </button>
        </p>

        {/* logo */}
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="SoftSite" className="img-fluid" />
          </Link>
        </div>

        {/* desktop nav */}
        <div className="navbarcontainer">
          <HashLink className="navbarlinks" smooth to="/">
            {WebText.home.navbar.navItems.item1}
          </HashLink>
          <div class="dropdown  ">
            <div className="dropdownbtn dropdown-toggle" smooth to="#d">
              Services
            </div>
            <div class="dropdown-content">
              <HashLink
                className="navbarlinksdropdown"
                smooth
                to="#webportfolio"
                scroll={(el) => scrollWidthOffset(el)}
              >
                Web Design
              </HashLink>
              <HashLink className="navbarlinksdropdown">AI and ML</HashLink>
              <HashLink className="navbarlinksdropdown">
                Learn and Code
              </HashLink>
              <HashLink
                className="navbarlinksdropdown"
                smooth
                to="#brandingsols"
                scroll={(el) => scrollWidthOffset2(el)}
              >
                Branding Solutions
              </HashLink>
            </div>
          </div>
          <HashLink className="navbarlinks" scroll={(el) => scrollWidthOffset2(el)} smooth to="#jobs">
            {WebText.home.navbar.navItems.item4}
          </HashLink>
          <HashLink className="navbarlinks" scroll={(el) => scrollWidthOffset2(el)} smooth to="#contact">
            {WebText.home.navbar.navItems.item5}
          </HashLink>
          <a
            style={{ marginTop: "-2px",marginLeft:"20px" }}
            href="https://wa.me/919867910690"
            rel="noreferrer"
            target="_blank"
          >
            <i
              style={{ color: "#f3c15d", fontSize: "23px" }}
              className="bi bi-whatsapp"
            ></i>
          </a>{" "}
          <a
            style={{ marginTop: "-2px", marginLeft: "20px" }}
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i
              style={{ color: "#f3c15d", paddingLeft: "4%", fontSize: "24px" }}
              className="bi bi-envelope"
            ></i>
          </a>
        </div>

        {/* button */}
        <nav>
  
          {user.googleSignIn ? (
            <div>
              <Link
                to="/#"
                className="get-started-btn scrollto"
                onClick={handleModel}
                style={{ border: "none", display: "inline" }}
              >
                {WebText.home.navbar.greeting} {user.name}
              </Link>
              <Link
                to="/#"
                className="get-started-btn scrollto"
                onClick={handleSignOutGoogle}
                style={{
                  display: "inline",
                  marginLeft: "2px",
                  padding: "5px 12px 8px 12px",
                }}
              >
                {WebText.home.navbar.btn.logout}
              </Link>
            </div>
          ) : (
            <Link
              to="/#"
              className="get-started-btn scrollto"
              onClick={handleModel}
            >
              {WebText.home.navbar.btn.signIn}
            </Link>
          )}
        </nav>
      </div>

      {/* mobile nav */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          className="navbar-nav nav-menu"
          style={{ textAlign: "left", marginLeft: "15%" }}
        >
          <li id="home" className="nav-item">
          
              <Link className="nav-link secondNav" to="/">
                {WebText.home.navbar.navItems.item1}
              </Link>
          </li>
          <li className="drop-down nav-item dropdown" id="secondNavServices">
            <Link
              className="nav-link dropdown-toggle"
              to="/services"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span style={{ paddingLeft: "13px" }}>
                {WebText.home.navbar.navItems.item2.main}
              
              </span>
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style={{ background: "#333333" }}
            >
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                style={{ textAlign: "left" }}
                onClick={nav2Deactive}
              ></button>
           
              <HashLink className="dropdown-item" 
              smooth to="#webportfolio"
                scroll={(el) => scrollWidthOffset(el)}>
                {WebText.home.navbar.navItems.item2.item2}
              </HashLink>
              <Link className="dropdown-item"  to="/e-marketing">
                {WebText.home.navbar.navItems.item2.item3}
              </Link>
              <Link className="dropdown-item" to="/businessPS">
                {WebText.home.navbar.navItems.item2.item4}
              </Link>
              <HashLink className="dropdown-item" smooth to="#brandingsols"
                scroll={(el) => scrollWidthOffset(el)}>
                {WebText.home.navbar.navItems.item2.item5}
              </HashLink>
            </div>
          </li>

          <li id="about" className="nav-item">
            
              <HashLink className="navbarlinksdropdown"  smooth to="#jobs">
                {WebText.home.navbar.navItems.item4}
              </HashLink>
            
          </li>

          <li id="5" className="nav-item">
              <HashLink className="nav-link" smooth to="#contact">
                {WebText.home.navbar.navItems.item5}
              </HashLink>
          </li>
        </ul>
      </div>
      <Modal
        
        onHide={handleModel}
        animation={true}
        className="d-flex align-items-center"
      >
        <Modal.Header
          closebutton
          style={{ borderBottom: "0px" }}
        ></Modal.Header>
        {user.googleSignIn ? (
          <div style={{ textAlign: "center", padding: "0px 50px 50px 50px" }}>
            <img
              src={user.photo}
              alt="Profile"
              width="50px"
              style={{ borderRadius: "50%" }}
            />
            <p>
              {WebText.home.navbar.popup.greeting} {user.name}
            </p>
            <p>{user.email}</p>
          </div>
        ) : (
          <Modal.Body
            closebutton
            style={{ textAlign: "center", padding: "0px 50px 50px 50px" }}
          >
            <h3>{WebText.home.navbar.popup.heading}</h3> <br />
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              <img src={facebook} alt="Facebook SignIn" width="300px" />
            </Button>
            <br />
            <Button
              onClick={handleSignInGoogle}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <img src={google} alt="Google SignIn" width="300px" />
            </Button>
            <br />
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              <img src={twitter} alt="Twitter SignIn" width="300px" />
            </Button>
            <br />
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              <img src={linkedIn} alt="LinkedIn SignIn" width="300px" />
            </Button>
          </Modal.Body>
        )}
      </Modal>
     
    </header>
  );
};

export default Navbar1;
