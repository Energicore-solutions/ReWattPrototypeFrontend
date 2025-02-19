import React from 'react'
import { Link } from 'react-router-dom'

function Action() {
  return (
    <>
        <section id="graph" className="features-area pt-80 pb-80" style={{ background: 'url("assets/img/bg/cat-bg.png")', backgroundSize: "cover" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                    <div className="section-title cta-title text-center mb-30">
                    <h5>CALL TO ACTION</h5>
                    <h2>
                        Providing Value To Clients Through
                        <br />
                        Product &amp; Innovation.
                    </h2>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                    <Link to="/contact" className="btn ss-btn">
                    Contact Us Now
                    </Link>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Action