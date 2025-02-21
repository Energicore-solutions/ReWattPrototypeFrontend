import React from 'react'
import { Link } from 'react-router-dom'
import slider5 from '../../assets/img/slider/slider_img05.png'
import slideronebg from '../../assets/img/slider/slider_img_bg.png'

function Slider() {
  return (
    <>
        <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${slideronebg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right top",zIndex: "0" }} >
                <div className="container">
                    <div className="row justify-content-center pt-50">
                    <div className="col-lg-7 col-md-7">
                        <div className="slider-content s-slider-content mt-150">
                        <h5 data-animation="fadeInDown" data-delay=".4s">
                            WELCOME{" "}
                        </h5>
                        <h2 data-animation="fadeInUp" data-delay=".4s">
                        Save Your Energy, Trade It Smartly
                        </h2>
                        <p data-animation="fadeInUp" data-delay=".6s">
                        Our platform rewards those who use renewable energy, while encouraging energy sharing and empowering communities. Our goal is to create a more sustainable and affordable energy future for everyone.
                        </p>
                     <div className='row'>
                     <div className="slider-btn mt-30">
                       
                       <Link to="/contact" className="btn ss-btn active">
                          Contact Us
                       </Link>
                       
                   </div>
                   <div className="slider-btn mt-30 ml-5">
                
                   <a href='https://rewatt.vercel.app/' className='btn ss-btn active'>Go to demo</a>
                  
              </div>
                     </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="slider-img" data-animation="fadeInUp" data-delay=".4s" >
                        <img decoding="async" src="https://wpdemo.zcubethemes.com/capatel/wp-content/uploads/2021/06/slider_img05-3.png" alt="https://wpdemo.zcubethemes.com/capatel/wp-content/uploads/2021/06/slider_img05-3.png"/>
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

export default Slider