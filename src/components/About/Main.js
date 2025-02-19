import React from 'react'
import Bredcom from '../Bredcom/Main'
import Team from '../Menabout/Team'
import About from '../Menhome/About'
import Action from '../Menhome/Action'
import Testimonials from '../Menhome/Testimonials'

function Main() {
  return (
    <>
        <Bredcom title="About Us" subtitle="Home" subtitledown="about"/>
        <About/>
        <Action/>
        <Team/>
        <Testimonials/>
    </>
  )
}

export default Main