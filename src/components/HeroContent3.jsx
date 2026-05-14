import React from 'react'
import './HeroContent3.css'

const whyChooseUs = [
  {
    title: 'Supreme Beans',
    description: 'Beans that provide great taste',
    image: '/src/images/coffee-beans.png',
  },
  {
    title: 'High Quality',
    description: 'We provide the highest quality',
    image: '/src/images/badge.png',
  },
  {
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    image: '/src/images/coffee-cup.png',
  },
  {
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    image: '/src/images/best-price.png',
  },
];

function HeroContent3() {
  return (
    <div className="hero3-section">
        <div className="hero3-header">
            <h2>Why are we different?</h2>
            <p>We don’t just make your coffee, we make your day!</p>
        </div>

      <div className="hero3-grid">
        {whyChooseUs.map((item) => (
          <article key={item.title} className="hero3-card">
            <div className="hero3-card-icon-wrap">
              <img src={item.image} alt={item.title} className="hero3-card-icon" />
            </div>
            <h3 className="hero3-card-title">{item.title}</h3>
            <p className="hero3-card-description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HeroContent3