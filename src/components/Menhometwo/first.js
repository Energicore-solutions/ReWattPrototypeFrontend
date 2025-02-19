import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import BgOne from '../../assets/img/slider/slider_img02.jpg'
import BgTwo from '../../assets/img/slider/slider_img01.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-down"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-arrow-up"></i></button>
    );
}

function first() {

    const settings = {
        autoplay: true,
		autoplaySpeed: 10000,
		dots:false ,
		arrows: true,
		prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
      };

  return (
    <>
         <section id="home" className="slider-area slider-four fix p-relative">
            <Slider className="slider-active" {...settings}>
                <div>
                    <div className="single-slider slider-bg slider-bg2 d-flex align-items-center" style={{ backgroundImage: `url(${BgOne})` , backgroundSize: "cover", backgroundPosition: "center top", repeat: "no-repeat"} } >
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="slider-content s-slider-content text2 text-center">
                            <h5 data-animation="fadeInDown" data-delay=".4s">
                                WELCOME{" "}
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s">
                                We Are The Best Solar <br />
                                Energy Source
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s">
                                Vivamus mattis ipsum vitae imperdiet eleifend. Nunc scelerisque
                                feugiat turpis, et tempor tellus porta vitae. Aenean hendrerit,
                                libero sed viverra auctor, est tortor pulvinar sem, non luctus
                                ante quam quis urna.
                            </p>
                            <div className="slider-btn mt-30">
                              
                                <Link to="/contact" className="btn ss-btn active" data-animation="fadeInRight" data-delay=".8s" tabIndex={0} >
                                Contact Us
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="single-slider slider-bg slider-bg2 d-flex align-items-center" style={{ backgroundImage: `url(${BgTwo})` , backgroundSize: "cover", repeat: "no-repeat"} }>
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="slider-content s-slider-content text2 text-center">
                            <h5 data-animation="fadeInDown" data-delay=".4s">
                                WELCOME{" "}
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s">
                                We Are The Best Solar <br />
                                Energy Source
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s">
                                Vivamus mattis ipsum vitae imperdiet eleifend. Nunc scelerisque
                                feugiat turpis, et tempor tellus porta vitae. Aenean hendrerit,
                                libero sed viverra auctor, est tortor pulvinar sem, non luctus
                                ante quam quis urna.
                            </p>
                            <div className="slider-btn mt-30">
        
                                <Link to="/contact" className="btn ss-btn active" data-animation="fadeInRight" data-delay=".8s" tabIndex={0} >
                                Contact Us
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            </Slider>
        </section>
    </>
  )
}

export default first