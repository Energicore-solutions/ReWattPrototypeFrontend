import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Header from '../components/Header/Main'
import Footer from '../components/Footer/Main'
import Hometwo from '../components/Hometwo/Main'
import About from '../components/About/Main'
import Project from '../components/Pages/Projects/Main'
import Projectdeatils from '../components/Pages/Projectsdetail/Main'
import Pricing from '../components/Pages/Pricing/Main'
import Team from '../components/Pages/Team/Main'
import Faq from '../components/Pages/Faq/Main'
import Shop from '../components/Pages/Shop/Main'
import Shopdeatils from '../components/Pages/Shopdetails/Main'
import Servise from '../components/Servise/Main'
import Servisedeatils from '../components/Servise-deatils/Main'
import Blog from '../components/Blog/Main'
import Blogdeatils from '../components/Blog-deatils/Main'
import Contact from '../components/Contact/Main'
import Teamdeatils from '../components/Teemdeatils/Main'
import Home from '../components/Home/Main'


function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hometwo" element={<Hometwo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/projectsdetail" element={<Projectdeatils/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shopdeatils" element={<Shopdeatils/>} />
          <Route path="/Service" element={<Servise/>} />
          <Route path="/Servicedeatils" element={<Servisedeatils/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogdetails" element={<Blogdeatils/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/teamdeatils" element={<Teamdeatils/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default Index