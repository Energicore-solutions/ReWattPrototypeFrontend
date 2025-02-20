import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 9,
    annualPrice: 99,
    features: [
      'Discover Pages',
      'Using Demo Applications',
      'Buy Energy',
      '1 chance for AI Service',
      '24X7 Contact Opportunity'
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 18,
    annualPrice: 120,
    features: [
      'Discover Pages',
      'Using Demo Applications',
      'Buy Energy',
      'Sell Energy',
      '3 Chance for AI Service',
      '24X7 Support',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 49,
    annualPrice: 399,
    features: [
      'Discover Pages',
      'Using Demo Applications',
      'Buy Energy',
      'Sell Energy',
      'Limitless AI Service',
      '24X7 Support',
    ],
  },
];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <>
      <section id="pricing" className="pricing-area pb-60" style={{background: 'url(assets/img/bg/aliment-left.png) no-repeat',backgroundPosition: 'left center',}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div className="section-title center-align mb-30 text-center">
                <h5>PRICING PLANS</h5>
                <h3>Payment Plan Models Introduction</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-lg-4 col-md-4" key={index}>
                <div className={`pricing-box pricing-box2 ${index === 1 ? 'active' : ''} mb-60`}>
                  <div className="pricing-head text-center">
                    <h3>{plan.name}</h3>
                    <div className="price-count pricing-amount">
                      <div
                        className={`monthly_price ${!isAnnual ? 'active' : ''
                          }`}
                      >
                        <h2>${plan.monthlyPrice}</h2>
                        <span className="subscription"> Per Month </span>
                      </div>
                      <div
                        className={`annual_price ${isAnnual ? 'active' : ''}`}
                      >
                        <h2>${plan.annualPrice}</h2>
                        <span className="subscription"> Per Annual </span>
                      </div>
                    </div>
                    <hr />
                  </div>

                  <div className="pricing-body mt-20 mb-30">
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pricing-btn text-center">
                    <Link to="/shopdeatils" className="btn ss-btn">
                      Gets Started
                    </Link>
                    <p>*Free Trial 14 Days</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;