import React from 'react';
import NumberCounter from 'number-counter';

const counterData = [
  { count: 784, text: 'Happy Clients', imgSrc: 'assets/img/icon/cn-iocn01.png', delay: 14 },
  { count: 987, text: 'Happy Clients', imgSrc: 'assets/img/icon/cn-iocn02.png', delay: 19 },
  { count: 974, text: 'Employees', imgSrc: 'assets/img/icon/cn-iocn03.png', delay: 19 },
  { count: 687, text: 'Annual Turnover', imgSrc: 'assets/img/icon/cn-iocn04.png', delay: 15 }
];

function Counter() {
  return (
    <>
      <div className="counter-area p-relative pt-80 pb-80" style={{ background: "url(assets/img/bg/counter-bg.png) repeat-x" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="section-title">
                <h5>COUNTER</h5>
                <h2>Fun Facts</h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row text-center">
                {counterData.map((data, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                      <div className="icon">
                        <img src={data.imgSrc} alt="img" />
                      </div>
                      <div className="counter p-relative">
                        <NumberCounter className="count" end={data.count} delay={data.delay} />
                        <p>{data.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
