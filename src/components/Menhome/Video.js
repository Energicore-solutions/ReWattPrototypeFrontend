import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Video() {

    const [video, setVideo] = useState(false);

  return (
    <>
        <section id="video" className="video-area about-p p-relative" style={{ backgroundColor: "#010f2e" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="s-video-wrap" style={{ backgroundImage: "assets/img/video/vıdeoımg.png" }} >
                    <div className="s-video-content">
                        <Link to="#" className="popup-video mb-50" onClick={() => setVideo(true)}  >
                            <img src="assets/img/bg/play-button.png" alt="circle_right" onClick={() => setVideo(true)} />
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 p-relative pl-70">
                    <div className="section-title">
                    <h5>WORK FLOW</h5>
                    <h2>How System Will Work</h2>
                    </div>
                    <div className="row how-box-contaniner">
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>01</h5>
                        <h3>Register</h3>
                        <p>
                        Create an account and choose the plan that suits you best. Take advantage of our benefits and maximize your experience. 
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>02</h5>
                        <h3>Trade Center</h3>
                        <p>
                        You can earn by trading energy in our ecosystem and follow the market to get the best deals.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>03</h5>
                        <h3>Try AI</h3>
                        <p>
                        Choose your location and watch our AI calculate how much energy you can generate based on weather forecasts!
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>04</h5>
                        <h3>Community</h3>
                        <p>
                        Join our community, ask questions and share knowledge! Share your experiences, interact with other users and stay up to date with the latest innovations!
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {video &&
            <>
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style={{overflow: "hidden"}}> 
                <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div className="mfp-content">
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setVideo(false)} >×</button>
                            <iframe className="mfp-iframe" src="assets/showcase.mp4" frameBorder="0" allowfullscreen=""></iframe>
                        </div>
                        </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                </div>
            </>
        }
    </>
  )
}

export default Video