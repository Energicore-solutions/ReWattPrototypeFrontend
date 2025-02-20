import React from 'react'
import Bg from '../../assets/img/bg/aliment-right.png'
import Aboutone from '../../assets/img/features/about_img.png'

function About() {
  return (
    <>
        <section id="about" className="about-area about-p pt-120 pb-130 p-relative" style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "right center" }}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-30">
                    <div className="about-title second-title pb-25">
                        <h5>ABOUT US</h5>
                    </div>
                    <p>
                    We set out to accelerate the transition to sustainable energy and make clean energy accessible to everyone. In 2025, our team of business and software developers came together to bring you innovative energy systems solutions, a strong community network and AI support. Let's build the clean energy ecosystem of the future together!
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About