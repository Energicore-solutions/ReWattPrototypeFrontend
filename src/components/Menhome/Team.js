import React from 'react'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Nashid Martin',
    role: 'Founder',
    imgSrc: 'assets/img/team/team_img01.png',
  },
  {
    name: 'Konne Backfi',
    role: 'CEO',
    imgSrc: 'assets/img/team/team_img02.png',
  },
  {
    name: 'Hackson Willi',
    role: 'Developer',
    imgSrc: 'assets/img/team/team_img03.png',
  },
  {
    name: 'Dekhina Pike',
    role: 'Founder',
    imgSrc: 'assets/img/team/team_img04.png',
  },
];

function Team() {
  return (
    <section
      id="team"
      className="team-area2 pt-120 pb-100"
      style={{
        background: 'url(assets/img/bg/aliment-right3.png) no-repeat',
        backgroundPosition: 'right center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className="section-title mb-50 text-center">
              <h5>OUR TEAM</h5>
              <h2>Our Working Expertise</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="row">
              {teamMembers.map((member) => (
                <div className="col-lg-3 col-md-6" key={member.name}>
                  <div className="single-team mb-30 ">
                    <div className="team-thumb">
                      <div className="brd">
                        <img src={member.imgSrc} alt="img" />
                      </div>
                      <div className="social align-items-center">
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.behance.net/">
                          <i className="fab fa-behance" />
                        </a>
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </div>
                    <div className="team-info">
                      <h4>
                        <Link to="/teamdeatils">{member.name}</Link>
                      </h4>
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;