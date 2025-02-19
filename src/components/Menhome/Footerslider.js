import React from 'react'
import Slider from "react-slick";

function Footerslider() {
  const brands = [
    { id: 1, src: "assets/img/brand/b-logo1.png" },
    { id: 2, src: "assets/img/brand/b-logo2.png" },
    { id: 3, src: "assets/img/brand/b-logo3.png" },
    { id: 4, src: "assets/img/brand/b-logo4.png" },
    { id: 5, src: "assets/img/brand/b-logo5.png" },
    { id: 6, src: "assets/img/brand/b-logo6.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="brand-area pt-60 pb-60">
        <div className="container">
          <Slider className="row brand-active" {...settings}>
            {brands.map((brand) => (
              <div key={brand.id}>
                <div className="single-brand">
                  <img src={brand.src} alt="img" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Footerslider;
