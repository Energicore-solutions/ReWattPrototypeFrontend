import React from 'react'
import Slider from "react-slick";

function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <section className="testimonial-area pb-90" style={{ background: "url(assets/img/bg/aliment-left2.png) no-repeat", backgroundPosition: "left center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-35 text-center">
                                <h5> Feedback </h5>
                                <h2>Our Testimonials</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Slider className="testimonial-active" {...settings}>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>
                                        Praesent nec elit imperdiet, tincidunt ex at, malesuada lectus.
                                        Praesent cursus diam risus, non accumsan neque fermentum eget.
                                        Maecenas vel aliquam enim aliquam aliquet finibus nisl.
                                    </p>
                                    <div className="testi-author">
                                        <img src="assets/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Margie R. Robinson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <div className="qt-img">
                                        <img src="assets/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials