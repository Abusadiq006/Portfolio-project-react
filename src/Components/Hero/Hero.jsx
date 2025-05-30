import React from 'react'
import './Hero.css'
import profile_img from '../../assets/myphoto.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Profile of Farmer Abusadiq" className="profile-img" />
        <h1><span>I'm Farmer Abusadiq,</span> front-end Developer based in Nigeria</h1>
        <p>I am a front-end Developer From Kaduna, 
            Nigeria with 5 years of Experience in multiple companies 
            like Colab, GreyHub and Tmax</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
    </div>
  )
}

export default Hero;