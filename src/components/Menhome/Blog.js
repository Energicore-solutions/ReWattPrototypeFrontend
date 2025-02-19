import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
        <section id="blog" className="blog-area  p-relative pt-120 pb-120 fix" style={{ background: "url(assets/img/bg/aliment-right4.png) no-repeat", backgroundPosition: "right center" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                    <h5>OUR TEAM</h5>
                    <h2> Latest Blog &amp; News</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="single-post2 mb-30">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                        <div className="blog-thumb2">
                            <Link to="/blogdetails">
                            <img src="assets/img/blog/inner_b1.jpg" alt="img" />
                            </Link>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                        <div className="blog-content2">
                            <h4>
                            <Link to="/blogdetails">
                                Cras et dictum nisl nulla vitae auctor diam
                            </Link>
                            </h4>
                            <div className="b-meta">
                            <div className="b-meta">
                                <div className="meta-info">
                                <ul>
                                    <li>
                                    <i className="fal fa-user" /> Admin
                                    </li>
                                    <li>
                                    <i className="fal fa-calendar-alt" /> 24th March 2021
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <p>
                            Suspendisse vulputate nibh eget eros darde rhoncus, id
                            scelerisque libero reade aluam. Integer ullamcorper, ex ac
                            ultrices pharetra.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="single-post2 mb-30">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                        <div className="blog-thumb2">
                            <Link to="/blogdetails">
                            <img src="assets/img/blog/inner_b2.jpg" alt="img" />
                            </Link>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                        <div className="blog-content2">
                            <h4>
                            <Link to="/blogdetails">
                                Cras et dictum nisl nulla vitae auctor diam
                            </Link>
                            </h4>
                            <div className="b-meta">
                            <div className="meta-info">
                                <ul>
                                <li>
                                    <i className="fal fa-user" /> Admin
                                </li>
                                <li>
                                    <i className="fal fa-calendar-alt" /> 24th March 2021
                                </li>
                                </ul>
                            </div>
                            </div>
                            <p>
                            Suspendisse vulputate nibh eget eros darde rhoncus, id
                            scelerisque libero reade aluam. Integer ullamcorper, ex ac
                            ultrices pharetra.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="single-post2 mb-30">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                        <div className="blog-thumb2">
                            <Link to="/blogdetails">
                            <img src="assets/img/blog/inner_b3.jpg" alt="img" />
                            </Link>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                        <div className="blog-content2">
                            <h4>
                            <Link to="/blogdetails">
                                Cras et dictum nisl nulla vitae auctor diam
                            </Link>
                            </h4>
                            <div className="b-meta">
                            <div className="b-meta">
                                <div className="meta-info">
                                <ul>
                                    <li>
                                    <i className="fal fa-user" /> Admin
                                    </li>
                                    <li>
                                    <i className="fal fa-calendar-alt" /> 24th March 2021
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <p>
                            Suspendisse vulputate nibh eget eros darde rhoncus, id
                            scelerisque libero reade aluam. Integer ullamcorper, ex ac
                            ultrices pharetra.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="single-post2 mb-30">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                        <div className="blog-thumb2">
                            <Link to="/blogdetails">
                            <img src="assets/img/blog/inner_b4.jpg" alt="img" />
                            </Link>
                        </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                        <div className="blog-content2">
                            <h4>
                            <Link to="/blogdetails">
                                Cras et dictum nisl nulla vitae auctor diam
                            </Link>
                            </h4>
                            <div className="b-meta">
                            <div className="b-meta">
                                <div className="b-meta">
                                <div className="meta-info">
                                    <ul>
                                    <li>
                                        <i className="fal fa-user" /> Admin
                                    </li>
                                    <li>
                                        <i className="fal fa-calendar-alt" /> 24th March
                                        2021
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <p>
                            Suspendisse vulputate nibh eget eros darde rhoncus, id
                            scelerisque libero reade aluam. Integer ullamcorper, ex ac
                            ultrices pharetra.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                    <Link to="/blog" className="btn ss-btn">
                    View All News
                    </Link>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog