import React from 'react'

function First() {
  return (
    <>
        <section id="faq" className="faq-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                            <button className="faq-btn" type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo" >
                                Do I need special equipment to sell my extra energy?
                            </button>
                            </h2>
                        </div>
                        <div id="collapseTwo"
                            className="collapse show"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample" style={{}} >
                            <div className="card-body">
                            Most energy systems already have the necessary components. However, a smart meter or specific agreements with your utility provider may be required.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample1">
                        <div className="card">
                        <div className="card-header" id="headingSix">
                            <h2 className="mb-0">
                            <button className="faq-btn"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseSix"
                                aria-expanded="true"
                                aria-controls="collapseSix">
                                Who can sell energy on your platform?
                            </button>
                            </h2>
                        </div>
                        <div id="collapseSix"
                            className="collapse show"
                            aria-labelledby="headingSix"
                            data-parent="#accordionExample"
                            style={{}} >
                            <div className="card-body">
                            Anyone with surplus renewable energy, such as homeowners with solar panels or businesses generating excess power, can register as a seller.
                            </div>
                        </div>
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