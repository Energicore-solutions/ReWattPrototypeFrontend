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
                        <h2>What’s Our Resources Story</h2>
                    </div>
                    <p>
                        Praesent fringilla lorem tincidunt, commodo erat sit amet, eleifend
                        neque. Etiam nec vestibulum turpis, quis tempus elit. Sed tempus
                        elit porttitor odio gravida, sed maximus turpis mattis. Vivamus at
                        urna ut libero ornare congue.
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