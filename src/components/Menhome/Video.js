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
                    <div className="s-video-wrap" style={{ backgroundImage: "url(assets/img/bg/video-img.png)" }} >
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
                    <h2>How We Work</h2>
                    </div>
                    <div className="row how-box-contaniner">
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>01</h5>
                        <h3>Peak Shaving</h3>
                        <p>
                            Nullam porttitorer, condimentum pharetra, tellus sapien
                            malesuada quampulvinar efficitur justo.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>02</h5>
                        <h3>Demand Response</h3>
                        <p>
                            Nullam porttitorer, condimentum pharetra, tellus sapien
                            malesuada quampulvinar efficitur justo.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>03</h5>
                        <h3>Load Shifting</h3>
                        <p>
                            Nullam porttitorer, condimentum pharetra, tellus sapien
                            malesuada quampulvinar efficitur justo.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                        <div className="how-box">
                        <h5>04</h5>
                        <h3>Renewable</h3>
                        <p>
                            Nullam porttitorer, condimentum pharetra, tellus sapien
                            malesuada quampulvinar efficitur justo.
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
                            <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameBorder="0" allowfullscreen=""></iframe>
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