import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpeg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Sarah</strong>, an experienced law 
        <br />
        professional who resolves your 
        <br />
        disputes as well as your worries.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
