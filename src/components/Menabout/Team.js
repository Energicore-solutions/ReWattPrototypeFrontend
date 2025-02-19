import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  return (
    <>
        <section id="team" className="team-area pt-120 pb-90 p-relative" style={{ background: "url(assets/img/bg/aliment-right3.png) no-repeat", backgroundPosition: "right center" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                    <h5>OUR TEAM</h5>
                    <h2>Our Working Expertise</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="flip-card mb-30">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="assets/img/team/team_img01.png" alt="img" />
                        </div>
                        <div className="flip-card-back">
                        <div className="mt-120">
                            <h4>
                            <Link to="/teamdeatils">Rosalina D. William</Link>
                            </h4>
                            <span>Founder</span>
                            <div className="social">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-behance" />
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="flip-card mb-30">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="assets/img/team/team_img02.png" alt="img" />
                        </div>
                        <div className="flip-card-back">
                        <div className="mt-120">
                            <h4>
                            <Link to="/teamdeatils">Alina Roboto William</Link>
                            </h4>
                            <span>CEO</span>
                            <div className="social">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-behance" />
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="flip-card mb-30">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src="assets/img/team/team_img03.png" alt="img" />
                        </div>
                        <div className="flip-card-back">
                        <div className="mt-120">
                            <h4>
                            <Link to="/teamdeatils">Rock Alane</Link>
                            </h4>
                            <span>Developer</span>
                            <div className="social">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-behance" />
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team