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
                            <img src='assets/img/logo/logo.png' alt="logo" className='p-2' />
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
                            <li>
                                <Link to="/shop">Trade Center</Link>
                            </li>
                            <li>
                                <Link to="/project">ReWatt AI</Link>
                            </li>
                            <li>
                                <Link to="/blog">Community</Link>
                            </li>

                            <li>
                                <Link to="/faq">FAQ</Link>
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
                        <Link to="/contact" className="btn ss-btn">
                          Contact
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
                                <li >
                                <Link to="/">Home</Link>
                                
                                </li>
                                <li>
                                <Link to="/shop">Trade Center</Link>
                            </li>
                            <li>
                                <Link to="/project">ReWatt AI</Link>
                            </li>
                            <li>
                                <Link to="/blog">Community</Link>
                            </li>

                            <li>
                                <Link to="/faq">FAQ</Link>
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
                                <Link to="/shop">Trade Center</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                <Link to="/project">ReWatt AI</Link>
                                   </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                <Link to="/blog">Community</Link>
                                 </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                <Link to="/faq">FAQ</Link>
                                 </li>


          </ul>
        </div>
        <div id="cssmenu2" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to="#howitwork">
                <span>energicore2@gmail.com</span>
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