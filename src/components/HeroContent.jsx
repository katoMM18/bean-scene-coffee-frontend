import React from 'react'
import './HeroContent.css'

function HeroContent() {
  return (
    <section className="hero-section2">
      <div className="content-left">
        <h2 className="discover">Discover the Best Coffee</h2>
        <p className="info">Bean Scene is a coffee shop that provides you
             with quality coffee that helps boost your productivity and helps
             build your mood. Having a cup of coffee is good, but having a
             cup of real coffee is greater. There is no doubt that you
             will enjoy this coffee more than others you
             have ever tasted.</p>
             
      </div>
      <div className="content-right">
        <img src="/src/images/coffee.png" alt="Coffee Beans" className="coffee-image" />
      </div>
    </section>
  )
}

export default HeroContent