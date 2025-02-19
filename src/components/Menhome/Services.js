import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../assets/img/bg/aliment-left.png";

const services = [
  {
    id: 1,
    icon: "flaticon flaticon-customer-support",
    title: "Technical Services",
    description:
      "Donec vestibulum arcu a arcu scelerisque, quis dignissim turpis semper onec tortor mi, volutpat a iaculis sit amet.",
  },
  {
    id: 2,
    icon: "flaticon flaticon-solar-panel",
    title: "Energy Panels",
    description:
      "Donec vestibulum arcu a arcu scelerisque, quis dignissim turpis semper onec tortor mi, volutpat a iaculis sit amet.",
  },
  {
    id: 3,
    icon: "flaticon flaticon-wind-energy",
    title: "Wind Generators",
    description:
      "Donec vestibulum arcu a arcu scelerisque, quis dignissim turpis semper onec tortor mi, volutpat a iaculis sit amet.",
  },
];

function Services() {
  return (
    <>
      <section id="services-08" className="services-08 pb-120 p-relative" style={{backgroundImage: `url(${Bg})`,backgroundRepeat: "no-repeat", backgroundPosition: "left center",}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;