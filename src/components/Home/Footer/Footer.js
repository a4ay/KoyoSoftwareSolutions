import React from "react";
import "./Footer.css";

import { animateScroll as scroll } from "react-scroll";

function Footer() {
  // const [dataFooter, setDataFooter] = useState([])
  const thisYear = new Date().getFullYear();
  const ScrollTo = function () {
    scroll.scrollToTop();
  };

  return (
    <div className="footercontainer" id="contact">
      <div className="contact">
        <div className="container ">
          <div className="section-title">
            <h2>Contact</h2>
            <br />
          </div>
        </div>
        <div
          id="map-container-google-1"
          className="z-depth-1-half map-container"
          style={{ height: "350px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8841435256463!2d72.86934941490306!3d19.200261987016756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e308faa87%3A0x762c8fa53c6ea895!2sWhispering%20Palms%20Shopping%20Complex%2C%20Akurli%20Rd%2C%20Mira%20Road%20East%2C%20Alika%20Nagar%2C%20Lokhandwala%20Twp%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1624316535089!5m2!1sen!2sin"
            frameBorder={0}
            style={{ border: 0, height: "350px", width: "100%" }}
            loading="lazy"
            allowFullScreen
            title="map address"
          />
        </div>

        <div id="footer">
          <span style={{ fontSize: "16px" }}>Service Terms</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: "16px" }}> Privacy Policy</span>

          <div className="container">
            <div className="social-links">
              Follow Us
              {" "}
              <a href="https://www.facebook.com/KoyoSoft" target="_blank" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              
              <a href="https://www.linkedin.com/company/koyo-soft" target="_blank" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
              <br class="d-md-none"></br>
              Contact Us
              <a href="tel:+919867910690" className="phone">
                {" "}
                <i className="bx bxs-phone"></i>
              </a>
              <a href="https://t.me/MAKE05" target="_blank" className="telegram">
                <i className="bx bxl-telegram"></i>
              </a>
              <a href="https://wa.me/919867910690" target="_blank" className="whatsapp">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#"target="_blank" className="envelope">
                <i className="bx bxs-envelope"></i>
              </a>
            </div>
            <div style={{ fontSize: "15px" }} className="copyright">
              &copy; Copyright{" "}and Designed by{" "}
              <a className="credits"style={{ fontSize: "14px",color: "#ffb03b" }} onClick={ScrollTo} href="/#">
                Koyo Software Solutions
              </a>
  
            </div>
        
          </div>
        </div>

        {/* Back to top */}
        <a href="/#" className="back-to-top" onClick={ScrollTo}>
          <i className="ri-arrow-up-line"></i>
        </a>
        <div id="preloader"></div>
      </div>
    </div>
  );
}

export default Footer;
