import React from "react";
import "./Footer.css";
// import { Link } from 'react-router-dom'
// import paypal from '../../img/payment/payment-icon-paypal.svg'
// import googlepay from '../../img/payment/payment-icon-googlepay.svg'
// import applepay from '../../img/payment/payment-icon-applepay.svg'
// import visa from '../../img/payment/payment-icon-visa.svg'
// import mastercard from '../../img/payment/payment-icon-mastercard.svg'
// import discover from '../../img/payment/payment-icon-discover.svg'
// import amex from '../../img/payment/payment-icon-amex.svg'
// import paymentGateway from '../../img/payment/paymentGateway.png'
// import logo from '../../img/logo/softsiteLogo.svg'
import { animateScroll as scroll } from "react-scroll";
import logo1 from "../../img/logo/tawn_tech.png";
import WebText from "../../TextData";
import { Container } from "@material-ui/core";

function Footer() {
  // const [dataFooter, setDataFooter] = useState([])
  const thisYear = new Date().getFullYear();
  const ScrollTo = function () {
    scroll.scrollToTop();
  };
  // useEffect( () => {
  //     fetch('http://localhost:4400/footer')
  //         .then(response => response.json())
  //         .then(data => {
  //             // console.log(data.data[0])
  //             // setDataFooter(data.data[0])
  //             data.data.map(element => setDataFooter(element))
  //         })
  // }, [])
  // const {email, phone, whatsapp} = dataFooter

  return (
    <div className="footercontainer">
      <div className="contact">
        <div className="container ">
          <div className="section-title">
            <h2>Contact</h2>
            <br />
          </div>
        </div>

        <div class="container mt-6 mb-4">
          <div class="row ">
            <div class="col-lg-12  info">
              <i class="bi bi-geo-alt d-flex p-2  "></i>
              <div style={{ marginTop: "5px", fontSize: "15px" }}>
                1305, 6B, Whispering Palms ,Akurli Rd, Kandivali East, Mumbai,
                Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        <footer id="footer">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2  priv1 ">Service Terms</div>
            <div className="col col-lg-2  priv2">Privacy Policy</div>
          </div>
          <div className="container">
            <div className="social-links">
              Follow Us
              <a href="/#" className="twitter">
                {" "}
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="/#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/amit.agarwal.1426"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="/#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
              <br class="d-md-none"></br>
              Contact Us
              <a href="/#" className="phone">
                {" "}
                <i className="bx bxs-phone"></i>
              </a>
              <a href="/#" className="telegram">
                <i className="bx bxl-telegram"></i>
              </a>
              <a href="https://wa.me/919867910690" className="whatsapp">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a href="/#" className="envelope">
                <i className="bx bxs-envelope"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; Copyright <strong>Koyo Software Solutions</strong>. All
              Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <a style={{ color: "#ffb03b" }} href="https://bootstrapmade.com/">
                Koyo Software Solutions
              </a>
            </div>
          </div>
        </footer>

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
