import React from 'react'

function First() {
  return (
    <>
        <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" >
            <div className="container">
                <div className="row">
                <div className="col-lg-5">
                    <div className="contact-info"
                    style={{ background: "url(assets/img/bg/footer-bg.png) no-repeat", backgroundSize: "cover" }} >
                    <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                        <div className="f-cta-icon">
                        <i className="far fa-map" />
                        </div>
                        <h5>Office Address</h5>
                        <p>
                        380 St Kilda Road, Melbourne <br />
                        VIC 3004, Australia
                        </p>
                    </div>
                    <div className="single-cta pb-30 mb-30 wow fadeInUp animated"
                        data-animation="fadeInDown animated" data-delay=".2s" >
                        <div className="f-cta-icon">
                        <i className="far fa-clock" />
                        </div>
                        <h5>Working Hours</h5>
                        <p>
                        Monday to Friday 09:00 to 18:30 and <br />
                        Saturday we work until 15:30
                        </p>
                    </div>
                    <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
                        data-delay=".2s" >
                        <div className="f-cta-icon">
                        <i className="far fa-envelope-open" />
                        </div>
                        <h5>Message Us</h5>
                        <p>
                        We are always with you to solve your problem mail us :{" "}
                        <a href="#">support@example.com</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="contact-bg02 wow fadeInLeft  animated">
                    <div className="section-title center-align">
                        <h5>CONTACT US</h5>
                        <h2>Get A Quote</h2>
                    </div>
                    <form action="mail.php" method="post" className="contact-form mt-30">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-field p-relative c-name mb-30">
                            <inpu type="text" id="firstn" name="firstn" placeholder="First Name" required="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-field p-relative c-email mb-20">
                            <input type="text" id="lastn" name="lastn" placeholder="Last Name" required="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-field p-relative c-subject mb-30">
                            <input type="text" id="email" name="email" placeholder="Eamil" required="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-field p-relative c-subject mb-30">
                            <input type="text" id="phone" name="phone" placeholder="Phone No." required="" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-subject mb-30">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required="" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-field p-relative c-message mb-30">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" defaultValue={""} />
                            </div>
                            <div className="slider-btn">
                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                                Submit Now
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <div className="map fix">
            <div className="container-flud">
                <div className="row">
                <div className="col-lg-12">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default First