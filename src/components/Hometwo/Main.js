import React from 'react'
import About from '../Menhome/About'
import Action from '../Menhome/Action'
import Blog from '../Menhome/Blog'
import Counter from '../Menhome/Counter'
import Footerslider from '../Menhome/Footerslider'
import Portfolio from '../Menhome/Portfolio'
import Prising from '../Menhome/Prising'
import Services from '../Menhome/Services'
import Team from '../Menhome/Team'
import Testimonials from '../Menhome/Testimonials'
import Video from '../Menhome/Video'
import First from '../Menhometwo/first'

function Main() {
  return (
    <>
        <First/>
        <About/>
        <Services/>
        <Counter/>
        <Portfolio/>
        <Prising/>
        <Video/>
        <Team/>
        <Testimonials/>
        <Action/>
        <Blog/>
        <Footerslider/>
    </>
  )
}

export default Main