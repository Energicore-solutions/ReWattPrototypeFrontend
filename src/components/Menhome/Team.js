import React from 'react'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Abdullah Ökmen',
    role: 'Founder',
    imgSrc: 'assets/img/team/abdullah.png',
  },
  {
    name: 'John Bilitsos',
    role: ' Web Developer, Cofounder',
    imgSrc: 'assets/img/team/jhon.png',
  },
  {
    name: ' Giorgos Mavridis',
    role: 'Business Analyst, Project Coordinator, Cofounder',
    imgSrc: 'assets/img/team/george.png',
  },
  {
    name: 'Sude Akgün',
    role: 'Web Developer, Cofounder',
    imgSrc: 'assets/img/team/Sude.png',
  },
  {
    name: 'Hayrunnisa Umutlu',
    role: 'Supervisor, Cofounder',
    imgSrc: 'assets/img/team/hayrunnisa.png',
  },
  {
    name: 'Maria Eirini Aslanidou',
    role: 'Graphic Designer and Strategist, cofounder',
    imgSrc: 'assets/img/team/maria.png',
  },
  {
    name: 'Halil Alpak',
    role: 'AI Developer, Cofounder',
    imgSrc: 'assets/img/team/halil.png',
  },
  {
    name: 'Giorgos Dimitropoulos ',
    role: 'Supervisor, Cofounder',
    imgSrc: 'assets/img/team/giorgi.png',
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
                    </div>
                    <div className="team-info">
                      <h4>
                        <Link to="/">{member.name}</Link>
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