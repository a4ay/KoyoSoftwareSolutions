import React from 'react'
import logo from '../../img/logo/softsiteLogo3.png'

function NavbarOfPortfoli() {
    return (
        <header id="header" class="fixed-top header-inner-pages">
            <div class="container d-flex align-items-center justify-content-between">

            {/* <h1 className="logo"><a href="/">SoftSite</a></h1> */}
            <a href="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></a>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/account">Registration</a></li>
                <li className="drop-down"><a href="/#">Products</a>
                    <ul>
                    <li className="drop-down"><a href="/#">GeM</a>
                            <ul>
                                <li><a href="/BuyerServices">BuyerServices</a></li>
                                <li><a href="/SellerServices">SellerServices</a></li>
                            </ul>
                        </li>
                        <li><a href="/webDevelopment">Web Development</a></li>
                        <li><a href="/e-marketing">E-Marketing</a></li>
                        <li><a href="/businessPS">Business Productivity Services</a></li>
                        <li><a href="/machineLearning">Machine Learning</a></li>
                        <li><a href="/professionalsToolbox">Professionals Toolbox</a></li>
                    </ul>
                </li>
                {/* <li><a href="/chat">Chat</a></li> */}
                <li><a href="/about">About</a></li>
                {/* <li><a href="/cart">Cart</a></li> */}
                <li><a href="/contact">Contact</a></li>

                </ul>
            </nav>

            <a href="/registration" className="get-started-btn scrollto">Get Started</a>

            </div>
        </header>
    )
}

export default NavbarOfPortfoli