import React from 'react'
import { Link } from 'react-router-dom'


function First() {
  return (
    <>
        <div className="about-area5 about-p pt-120 pb-90 p-relative">
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 order-2">
                    <aside className="sidebar services-sidebar">
                    <div className="sidebar-widget categories">
                        <div className="widget-content">
                        <ul className="services-categories">
                            <li>
                            <Link to="/Servicedeatils">All Services</Link>
                            </li>
                            <li className="active">
                            <Link to="/Servicedeatils">Automotive Parts</Link>
                            </li>
                            <li>
                            <Link to="/Servicedeatils">Power &amp; Energy</Link>
                            </li>
                            <li>
                            <Link to="/Servicedeatils">Mechanical Works</Link>
                            </li>
                            <li>
                            <Link to="/Servicedeatils">Maintenance</Link>
                            </li>
                            <li>
                            <Link to="/Servicedeatils">Contruction</Link>
                            </li>
                            <li>
                            <Link to="/Servicedeatils">Mechanical</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="brochures-box">
                        <div className="inner">
                        <h4>Download Brochures</h4>
                        <div className="text">
                            Pleasure and praising pain was born and I will give you a
                            complete account.
                        </div>
                        <Link className="theme-btn btn-style-one" to="#">
                            <span className="btn-title"> <i className="fa fa-file-pdf" /> Info Company </span>
                        </Link>
                        <Link className="theme-btn btn-style-one" to="#">
                            <span className="btn-title"> <i className="fa fa-file-pdf" /> Brochure Newest </span>
                        </Link>
                        </div>
                    </div>
                    </aside>
                </div>
    
                <div className="col-lg-8 col-md-12 col-sm-12 order-1">
                    <div className="service-detail">
                    <div className="content-box">
                        <h2> We give the best Services </h2>
                        <p>
                        Pleasure and praising pain was born and I will give you a complete
                        account of the systems, and expound the actually teachings of the
                        great explorer of the truth, the master-builder of human uts
                        happiness. No one rejects, dislikes, or avoids pleasure itself,
                        because it is pleasure, but because those who do not know how to
                        pursue pleasure rationally Nor who loves or pursues or desires to
                        obtain pain of itself.
                        </p>
                        <div className="two-column">
                        <div className="row">
                            <div className="image-column col-xl-6 col-lg-12 col-md-12">
                            <figure className="image">
                                <img src="assets/img/resource/post-img-1.jpg" alt="" />
                            </figure>
                            </div>
                            <div className="text-column col-xl-6 col-lg-12 col-md-12">
                            <p>
                                Builds and finances utility scale solar and storage projects
                                throughout the United States. We specialize in developing
                                renewable solutions to suit the specific needs of large
                                investor owned utilities.
                            </p>
                            <ul className="list-style-one">
                                <li>Engine oil level should be regularly</li>
                                <li>Tyres have a minimum of 1.6mm of tread</li>
                                <li>Ensure that the electrolyte level is correct</li>
                                <li>Never remove the radiator when the</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <h3>Why Choose This Service</h3>
                        <p>
                        Complete account of the systems and expound the actually teachings
                        of the great explorer of the truth, the master-builder of human
                        uts happiness. No one rejects, dislikes, or avoids pleasure
                        itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are
                        extremely.
                        </p>
                        <p>
                        Complete account of the systems and expound the actually teachings
                        of the great explorer of the truth, the master-builder of human
                        uts happiness. No one rejects, dislikes, or avoids pleasure
                        itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default First