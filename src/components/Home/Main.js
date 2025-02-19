import React from 'react'
import About from '../Menhome/About'
import Action from '../Menhome/Action'
import Blog from '../Menhome/Blog'
import Counter from '../Menhome/Counter'
import Footerslider from '../Menhome/Footerslider'
import Portfolio from '../Menhome/Portfolio'
import Prising from '../Menhome/Prising'
import Services from '../Menhome/Services'
import Slider from '../Menhome/Slider'
import Team from '../Menhome/Team'
import Testimonials from '../Menhome/Testimonials'
import Video from '../Menhome/Video'


function Main() {
  return (
    <>
      <main>
        <Slider/>
        <About/>
        <Services/>
        <Counter/>
        <Prising/>
        <Video/>
        <Team/>
        <Testimonials/>
        <Blog/>
        <Footerslider/>
      </main>
    </>
  )
}

export default Main