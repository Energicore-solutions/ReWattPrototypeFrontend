import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Main() {

    const [Btnshow, setBtnshow] = useState(false);
    const [mobile, setmobile] = useState(false);
    const [Events, setEvent] = useState(false);
    const [News, setNews] = useState(false);
    const [Services, setServices] = useState(false);
    const [Blog, setblog] = useState(false);
    const location = useLocation();
    const path = location.pathname


  return (
    <>
       <header className="header-area header-three">
       
            <div id="header-sticky" className={path === "/" ? "menu-area" : ""}>
                <div className="container">
                <div className="second-menu">
                    <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2">
                        <div className="logo">
                        <Link to="/">
                            <img src='assets/img/logo/logo.png' alt="logo" />
                        </Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="main-menu text-right text-xl-right">
                        <nav id="mobile-menu">
                            <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            {/* <li>
                                <Link to="/about">About Us</Link>
                            </li> */}

                            <li>
                                <Link to="/shop">Trade Center</Link>
                            </li>
                            <li>
                                <Link to="/">ReWatt AI</Link>
                            </li>
                            <li>
                                <Link to="/blog">Community</Link>
                            </li>

                            {/* <li>
                                <Link to="/pricing">Pricing</Link>
                            </li> */}

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                          
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-1 text-center d-none d-lg-block mt-15 mb-15">
                        <Link to="#" className="menu-tigger" onClick={() => { setBtnshow(true) }}>
                             <i className="fal fa-search" onClick={() => { setBtnshow(true) }} />
                        </Link>
                    </div>
                    <div className="col-xl-2 col-lg-2 text-right d-none d-lg-block mt-15 mb-15">
                        <Link to="/" className="btn ss-btn">
                            Log in
                        </Link>
                    </div>


                    <div className="col-12">
                    <div className="mobile-menu mean-container">
                        <div className="mean-bar">
                            <Link to="#"  onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: 0, fontSize: 18 }} >
                                { mobile ? "X" : <span><span><span></span></span></span> }
                            </Link>
                            {mobile &&  
                            <nav className="mean-nav">
                            <ul style={{ display : "block" }}>
                                <li className="has-sub">
                                <Link to="/">Home</Link>
                                { Events && 
                                <ul style={{ display: "block" }}>
                                    <li>
                                    <Link to="/">Home Page 01</Link>
                                    </li>
                                    <li>
                                    <Link to="/hometwo">Home Page 02</Link>
                                    </li>
                                </ul>
                                }
                                <Link className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setEvent(!Events) }} to="#" style={{ fontSize: 18 }}>
                                        {Events ? "-" : "+"}
                                </Link>
                                </li>
                                <li>
                                <Link to="/about">About Us</Link>
                                </li>
                                <li className="has-sub">
                                <Link to="#">Pages</Link>
                                {News && 
                                <ul style={{ display: "block" }}>
                                    <li>
                                    <Link to="/project">Project</Link>
                                    </li>
                                    <li>
                                    <Link to="/projectsdetail">Project Details</Link>
                                    </li>
                                    <li>
                                    <Link to="/pricing">Pricing</Link>
                                    </li>
                                    <li>
                                    <Link to="/team">Team</Link>
                                    </li>
                                    <li>
                                    <Link to="/faq">Faq</Link>
                                    </li>
                                    <li>
                                    <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                    <Link to="/shopdetails">Shop Details</Link>
                                    </li>
                                </ul>
                                }
                                 <Link className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setNews(!News) }} to="#" style={{ fontSize: 18 }}>
                                     {News ? "-" : "+"}
                                 </Link>
                                </li>
                                <li className="has-sub">
                                <Link to="/Service">Services</Link>
                                {Services && 
                                <ul style={{ display: "block" }}>
                                    <li>
                                    <Link to="/Service">Services</Link>
                                    </li>
                                    <li>
                                    <Link to="/Servicedeatils">Services Details</Link>
                                    </li>
                                </ul>
                                }
                                 <Link className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setServices(!Services) }} to="#" style={{ fontSize: 18 }}>
                                    {Services ? "-" : "+"}
                                 </Link>
                                </li>
                                <li className="has-sub">
                                <Link to="/blog">Blog</Link>
                                {Blog && 
                                <ul style={{ display: "block" }}>
                                    <li>
                                    <Link to="/blog">Blog</Link>
                                    </li>
                                    <li className="mean-last">
                                    <Link to="/blogdetails">Blog Details</Link>
                                    </li>
                                </ul>
                                }
                                <Link className={`mean-expand ${mobile && "mean-clicked"}`}  onClick={() => { setblog(!Blog) }} to="#" style={{ fontSize: 18 }}>
                                    {Blog ? "-" : "+"}
                                 </Link>
                                </li>
                            </ul>
                            </nav>
                            }
                        </div>
                    </div>

                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
       </header>

       {Btnshow && 
       <>
        <div className={`offcanvas-menu ${"active"}`}>
        <span className="menu-close" onClick={() => setBtnshow(false)}>
          <i className="fas fa-times" onClick={() => setBtnshow(false)} />
        </span>
        <form role="search" method="get" id="searchform" className="searchform" action="http://wordpress.zcube.in/xconsulta/" >
          <input type="text" name="s" id="search" defaultValue="" placeholder="Search" />
          <button>
            <i className="fa fa-search" />
          </button>
        </form>
        <div id="cssmenu3" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-2" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/about">About Us</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/Service">Services</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/pricing">Pricing </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/team">Team </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/project">Gallery Study</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div id="cssmenu2" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="#home">
                <span>+8 12 3456897</span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="#howitwork">
                <span>info@example.com</span>
              </Link>
            </li>
          </ul>
        </div>
        </div>

         <div className={`offcanvas-overly ${"active"}`}> </div>
      </>
       }
    </>
  )
}

export default Main