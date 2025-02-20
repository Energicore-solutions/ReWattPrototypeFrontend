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
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title mb-45">
                        <img src="assets/img/logo/logo.png" alt="img" />
                        </div>
                        <div className="footer-link">
                        At ReWatt, we are shaping the future by providing sustainable energy solutions. With our innovative ecosystem, we provide our users with many advantages such as energy trading, production forecasting and community interaction. Be with us for reliable, transparent and efficient energy management!
                        </div>
                      
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                    <div className="footer-widget mb-30">
                        <div className="f-widget-title">
                        <h2>Get In Touch</h2>
                        </div>
                        <div className="f-contact">
                        <ul>
                            <li>
                            <i className="icon fal fa-envelope" />
                            <span>
                                <Link to="mailto:info@example.com">energicore2@gmail.com</Link>
                            </span>
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
                     Copyright © 2025 ReWatt All rights reserved.
                    </div>
                    <div className="col-lg-6 text-right text-xl-right">
                    <ul>
                     
                        <li>
                        {" "}
                        <span className="footer-social">
                           
                            <Link to="https://www.instagram.com/rewattofficial?igsh=OGtjN2VmaWJqdWVq">
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