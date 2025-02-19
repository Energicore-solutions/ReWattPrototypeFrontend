import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <footer className="footer-bg footer-p">
            <div className="footer-top-heiding pt-70 pb-120">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="section-title">
                        <h2>
                        {" "}
                        Get Update
                        <br /> From Newsletter
                        </h2>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="newslater-area">
                        <form
                        name="ajax-form"
                        id="contact-form4"
                        action="#"
                        method="post"
                        className="contact-form newslater"
                        >
                        <div className="form-group">
                            <input
                            className="form-control"
                            id="email2"
                            name="email"
                            type="email"
                            placeholder="Email Address..."
                            defaultValue=""
                            required=""
                            />
                            <button type="submit" className="btn btn-custom" id="send2">
                            Subscribe Now
                            </button>
                        </div>
                        {/* /Form-email */}
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-top pb-40">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title mb-45">
                        <img src="assets/img/logo/f_logo.png" alt="img" />
                        </div>
                        <div className="footer-link">
                        Aenean pulvinar laoreet tellus ut tinct. Praesent a lectus
                        egestas, finibus enim sit amet, mollis lorem. Sed a volutpat
                        velit. Pellet habitant morbi tristique senectus et.
                        </div>
                        <div className="f-contact mt-30">
                        <ul>
                            <li>
                            <i className="icon fal fa-map-marker-check" />
                            <span>1247/Plot No. 39, 15th Phase, Colony, Kanpur</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Our Links</h2>
                        </div>
                        <div className="footer-link">
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about"> About Us</Link>
                            </li>
                            <li>
                            <Link to="/Service"> Services </Link>
                            </li>
                            <li>
                            <Link to="/contact">Term</Link>
                            </li>
                            <li>
                            <Link to="/blog">Blog </Link>
                            </li>
                            <li>
                            <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                            <Link to="/contact">Support</Link>
                            </li>
                            <li>
                            <Link to="/contact">Privercy</Link>
                            </li>
                            <li>
                            <Link to="/contact"> Contact Us</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Get In Touch</h2>
                        </div>
                        <div className="f-contact">
                        <ul>
                            <li>
                            <i className="icon fal fa-phone" />
                            <span>
                                1800-121-3637
                                <br />
                                +91-7052-101-786
                            </span>
                            </li>
                            <li>
                            <i className="icon fal fa-envelope" />
                            <span>
                                <Link to="mailto:info@example.com">info@example.com</Link>
                                <br />
                                <Link to="mailto:help@example.com">help@example.com</Link>
                            </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Our Gallery</h2>
                        </div>
                        <div className="f-insta">
                        <ul>
                            <li>
                            <Link to="assets/img/instagram/f-galler-01.png" className="popup-image" >
                                <img src="assets/img/instagram/f-galler-01.png" alt="img" />
                            </Link>
                            </li>
                            <li>
                            <Link to="assets/img/instagram/f-galler-02.png" className="popup-image" >
                                <img src="assets/img/instagram/f-galler-02.png" alt="img" />
                            </Link>
                            </li>
                            <li>
                            <Link to="assets/img/instagram/f-galler-03.png" className="popup-image" >
                                <img src="assets/img/instagram/f-galler-03.png" alt="img" />
                            </Link>
                            </li>
                            <li>
                            <Link to="assets/img/instagram/f-galler-04.png"
                                className="popup-image" >
                                <img src="assets/img/instagram/f-galler-04.png" alt="img" />
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                     Copyright © 2023 Capatel All rights reserved.
                    </div>
                    <div className="col-lg-6 text-right text-xl-right">
                    <ul>
                        <li>
                        <Link to="#">Privercy</Link>
                        </li>
                        <li>
                        <Link to="#">Term &amp; Conditions</Link>
                        </li>
                        <li>
                        <Link to="#">Legal</Link>
                        </li>
                        <li>
                        {" "}
                        <span className="footer-social">
                            <Link to="www.facebook.com">
                            <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="www.twitter.com">
                            <i className="fab fa-twitter" />
                            </Link>
                            <Link to="www.instagram.com">
                            <i className="fab fa-instagram" />
                            </Link>
                        </span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Main