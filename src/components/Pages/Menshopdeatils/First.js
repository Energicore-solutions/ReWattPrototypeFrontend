import React from 'react'

function First() {
  return (
    <>
        <section className="shop-banner-area pt-120 pb-90 " data-animation="fadeInUp animated" data-delay=".2s" >
            <div className="container">
                <div className="row">
                <div className="col-xl-7">
                    <div className="shop-thumb-tab mb-30">
                    <ul className="nav" id="myTab2" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-selected="true" >
                            <img src="assets/img/shop/details/thumb1.jpg" alt="" />{" "}
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-selected="false" >
                            <img src="assets/img/shop/details/thumb2.jpg" alt="" />
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"
                            id="profile-tab2"
                            data-toggle="tab"
                            href="#profile1"
                            role="tab" aria-selected="false" >
                            <img src="assets/img/shop/details/thumb3.jpg" alt="" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="product-details-img mb-30">
                    <div className="tab-content" id="myTabContent2">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" >
                        <div className="product-large-img">
                            <img src="assets/img/shop/details/large1.jpg" alt="" />
                        </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel">
                        <div className="product-large-img">
                            <img src="assets/img/shop/details/large2.jpg" alt="" />
                        </div>
                        </div>
                        <div className="tab-pane fade" id="profile1" role="tabpanel">
                        <div className="product-large-img">
                            <img src="assets/img/shop/details/large3.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="product-details mb-30">
                    <div className="product-details-title">
                        <p>Workstead</p>
                        <h1>Helios Piranho Lamp</h1>
                        <div className="price details-price pb-30 mb-20">
                        <span>$700.00</span>
                        <span className="old-price">$820.00</span>
                        </div>
                    </div>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </p>
                    <div className="product-cat mt-30 mb-30">
                        <span>Category: </span>
                        <a href="#">furniture,</a>
                        <a href="#">decor</a>
                    </div>
                    <div className="product-details-action">
                        <form action="#">
                        <div className="plus-minus">
                            <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                            </div>
                        </div>
                        <button className="btn btn-black" type="submit">
                            add to cart
                        </button>
                        </form>
                    </div>
                    <div className="product-social mt-45">
                        <a href="https://www.facebook.com">
                        <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com">
                        <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.behance.net">
                        <i className="fab fa-behance" />
                        </a>
                        <a href="https://www.linkedin.com">
                        <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="https://www.youtube.com">
                        <i className="fab fa-youtube" />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="product-desc-area pb-55">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="bakix-details-tab">
                    <ul className="nav text-center justify-content-center pb-30 mb-50" id="myTab" role="tablist" >
                        <li className="nav-item">
                        <a className="nav-link active"
                            id="desc-tab"
                            data-toggle="tab"
                            href="#id-desc"
                            role="tab"
                            aria-controls="home" aria-selected="true" >
                            Description{" "}
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"
                            id="id-add-in"
                            data-toggle="tab"
                            href="#id-add"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false" >
                            Additional Information
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"
                            id="id-r"
                            data-toggle="tab"
                            href="#id-rev"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false" >
                            {" "}
                            Get A Quote{" "}
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active"
                        id="id-desc"
                        role="tabpanel"
                        aria-labelledby="desc-tab" >
                        <div className="event-text mb-40">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora.
                        </p>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="id-add"
                        role="tabpanel" aria-labelledby="id-add-in" >
                        <div className="additional-info">
                        <div className="table-responsive">
                            <h4>Additional information</h4>
                            <table className="table">
                            <tbody>
                                <tr>
                                <th>Weight</th>
                                <td className="product_weight">1.4 oz</td>
                                </tr>
                                <tr>
                                <th>Dimensions</th>
                                <td className="product_dimensions">62 × 56 × 12 in</td>
                                </tr>
                                <tr>
                                <th>Size</th>
                                <td className="product_dimensions">
                                    XL, XXL, LG, SM, MD
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="id-rev"
                        role="tabpanel"
                        aria-labelledby="id-r" >
                        <div className="contact-bg02 text-center">
                        <div className="section-title  mb-50">
                            <h2>Get A Quote</h2>
                        </div>
                        <form
                            action="mail.php"
                            method="post"
                            className="contact-form mt-30" >
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-field p-relative c-name mb-30">
                                <input type="text"
                                    id="firstn"
                                    name="firstn"
                                    placeholder="First Name"
                                    required="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-field p-relative c-email mb-30">
                                <input
                                    type="text"
                                    id="lastn"
                                    name="lastn"
                                    placeholder="Last Name"
                                    required="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-field p-relative c-subject mb-30">
                                <input type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Eamil" required="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-field p-relative c-subject mb-30">
                                <input type="text" id="phone" name="phone" placeholder="Phone No." required="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-field p-relative c-option mb-30">
                                <input type="text"
                                    id="product-name"
                                    name="product-name" placeholder="Product Name" required="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-field p-relative c-message mb-30">
                                <textarea name="message"
                                    id="message"
                                    cols={30}
                                    rows={10}
                                    placeholder="Write comments" defaultValue={""} />
                                </div>
                                <div className="slider-btn mb-70">
                                <button className="btn ss-btn active"
                                    data-animation="fadeInRight"
                                    data-delay=".8s" >
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
                </div>
            </div>
        </section>
    </>
  )
}

export default First