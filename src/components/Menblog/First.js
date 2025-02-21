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
                                            <i className="far fa-user" /> by Halil
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                        A New Era in the Electric Vehicle Market
                                        </Link>
                                    </h2>
                                    <p>
                                    Electric vehicles are shaping the future of the automotive industry. Recently, there has been a significant increase in electric vehicle sales worldwide, particularly in China, Europe, and America.
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
                                        <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b4.jpg" alt="" />
                                    </div>
                                </Slider>
                                <div className="bsingle__content">
                                    <div className="admin">
                                        <Link to="#">
                                            <i className="far fa-user" /> by Sude
                                        </Link>
                                    </div>
                                    <h2>
                                        <Link to="/blogdetails">
                                        The Oil of the New Era: Renewable Energy
                                        </Link>
                                    </h2>
                                    <p>
                                    Renewable energy is rapidly replacing fossil fuels, creating environmental and economic transformations worldwide. Solar, wind, and other sustainable sources are laying the foundation for future energy systems.
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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First