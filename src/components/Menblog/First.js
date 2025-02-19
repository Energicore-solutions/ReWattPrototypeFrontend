import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";


function First() {

    const [video, setVideo] = useState(false);


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button type="button" className={`slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fas fa-arrow-right"></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button type="button" className={`slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fas fa-arrow-left"></i></button>

        );
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <>
            <section className="inner-blog pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb">
                                    <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                </div>
                                <div className="bsingle__content">
                                    <div className="admin">
                                        <Link to="#">
                                            <i className="far fa-user" /> by Hetmayar
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Novia's spaciously two bedroom apartments are perfect for families
                                        and even business partners. Look out into the Manhattan skyline
                                        from the open fully equipped kitchen.
                                    </p>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb video-p">
                                    <img src="assets/img/blog/inner_b2.jpg" alt="" />
                                    <Link to="#" className="video-i popup-video" onClick={() => setVideo(true)}>
                                        <i className="fas fa-play" onClick={() => setVideo(true)} />
                                    </Link>
                                </div>
                                <div className="bsingle__content">
                                    <div className="admin">
                                        <Link to="#">
                                            <i className="far fa-user" /> by Hetmayar
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Novia's spaciously two bedroom apartments are perfect for families
                                        and even business partners. Look out into the Manhattan skyline
                                        from the open fully equipped kitchen.
                                    </p>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <Slider className="bsingle__post-thumb blog-active" {...settings}>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b3.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b2.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                    </div>
                                </Slider>
                                <div className="bsingle__content">
                                    <div className="admin">
                                        <Link to="#">
                                            <i className="far fa-user" /> by Hetmayar
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Novia's spaciously two bedroom apartments are perfect for families
                                        and even business partners. Look out into the Manhattan skyline
                                        from the open fully equipped kitchen.
                                    </p>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                                    <iframe height={300} allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                                </div>
                                <div className="bsingle__content">
                                    <div className="admin">
                                        <Link to="#">
                                            <i className="far fa-user" /> by Hetmayar
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Novia's spaciously two bedroom apartments are perfect for families
                                        and even business partners. Look out into the Manhattan skyline
                                        from the open fully equipped kitchen.
                                    </p>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__content">
                                    <h2>
                                        <Link to="/blogdetails">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Novia's spaciously two bedroom apartments are perfect for families
                                        and even business partners. Look out into the Manhattan skyline
                                        from the open fully equipped kitchen.
                                    </p>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__content quote-post" style={{ backgroundImage: "url(assets/img/bg/quote_bg.png)" }} >
                                    <div className="quote-icon">
                                        <img src="assets/img/icon/blockquote.png" alt="" />
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                            We denounce with of righteous one indignation and dislike men.
                                        </Link>
                                    </h2>
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fal fa-eye" /> 100 Views
                                            </li>
                                            <li>
                                                <i className="fal fa-comments" /> 35 Comments
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link to="#">
                                                <i className="fas fa-angle-double-left" />
                                            </Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="#">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">...</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">10</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">
                                                <i className="fas fa-angle-double-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <aside className="sidebar-widget">
                                <section id="search-3" className="widget widget_search">
                                    <h2 className="widget-title">Search</h2>
                                    <form
                                        role="search"
                                        method="get"
                                        className="search-form"
                                        action="http://wordpress.zcube.in/finco/"
                                    >
                                        <label>
                                            <span className="screen-reader-text">Search for:</span>
                                            <input
                                                type="search"
                                                className="search-field"
                                                placeholder="Search …"
                                                defaultValue=""
                                                name="s"
                                            />
                                        </label>
                                        <input
                                            type="submit"
                                            className="search-submit"
                                            defaultValue="Search"
                                        />
                                    </form>
                                </section>
                                <section
                                    id="custom_html-5"
                                    className="widget_text widget widget_custom_html"
                                >
                                    <h2 className="widget-title">Follow Us</h2>
                                    <div className="textwidget custom-html-widget">
                                        <div className="widget-social">
                                            <Link to="#">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fab fa-pinterest-p" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fab fa-wordpress" />
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                <section id="categories-1" className="widget widget_categories">
                                    <h2 className="widget-title">Categories</h2>
                                    <ul>
                                        <li className="cat-item cat-item-16">
                                            <Link to="#">Branding</Link> (4)
                                        </li>
                                        <li className="cat-item cat-item-23">
                                            <Link to="#">Corporat</Link> (3)
                                        </li>
                                        <li className="cat-item cat-item-18">
                                            <Link to="#">Design</Link> (3)
                                        </li>
                                        <li className="cat-item cat-item-22">
                                            <Link to="#">Gallery</Link> (3)
                                        </li>
                                    </ul>
                                </section>
                                <section id="recent-posts-4" className="widget widget_recent_entries">
                                    <h2 className="widget-title">Recent Posts</h2>
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                User Experience Psychology And Performance Smshing
                                            </Link>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                        <li>
                                            <Link to="#">Monthly Web Development Up Cost Of JavaScript</Link>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                There are many variation passages of like available.
                                            </Link>
                                            <span className="post-date">August 19, 2020</span>
                                        </li>
                                    </ul>
                                </section>
                                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                                    <h2 className="widget-title">Tag</h2>
                                    <div className="tagcloud">
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-28 tag-link-position-1"
                                            style={{ fontSize: "8pt" }}
                                            aria-label="app (1 item)"
                                        >
                                            app
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-17 tag-link-position-2"
                                            style={{ fontSize: "8pt" }}
                                            aria-label="Branding (1 item)"
                                        >
                                            Branding
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-20 tag-link-position-3"
                                            style={{ fontSize: "8pt" }}
                                            aria-label="corporat (1 item)"
                                        >
                                            corporat
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-24 tag-link-position-4"
                                            style={{ fontSize: "16.4pt" }}
                                            aria-label="Design (2 items)"
                                        >
                                            Design
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-25 tag-link-position-5"
                                            style={{ fontSize: "22pt" }}
                                            aria-label="gallery (3 items)"
                                        >
                                            gallery
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-26 tag-link-position-6"
                                            style={{ fontSize: "8pt" }}
                                            aria-label="video (1 item)"
                                        >
                                            video
                                        </Link>
                                        <Link
                                            to="#"
                                            className="tag-cloud-link tag-link-29 tag-link-position-7"
                                            style={{ fontSize: "16.4pt" }}
                                            aria-label="web design (2 items)"
                                        >
                                            web design
                                        </Link>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>


            {video &&
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style={{ overflow: "hidden" }}>
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

export default First