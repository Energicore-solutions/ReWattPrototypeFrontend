import React from 'react'
import { Link } from 'react-router-dom'

function Main({subtitle, title , subtitledown}) {
  return (
    <>
        <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(assets/img/testimonial/test-bg.png)" }} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="breadcrumb-wrap text-left">
                    <div className="breadcrumb-title">
                        <h2> { title } </h2>
                        <div className="breadcrumb-wrap">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/"> {subtitle} </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {subtitledown}
                            </li>
                            </ol>
                        </nav>
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

export default Main