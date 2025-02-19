import React from 'react'
import Bredcom from '../Bredcom/Main'
import Servise from '../Menhome/Services'
import Video from '../Menhome/Video'
import Testimonials from '../Menhome/Testimonials'
import Footerslider from '../Menhome/Footerslider'


function Main() {
  return (
    <>
        <Bredcom title="Services" subtitle="Home" subtitledown="Pricing" />
        <Servise/>
        <Video/>
        <Testimonials/>
        <Footerslider/>
    </>
  )
}

export default Main