import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroContent2.css'

const coffeeItems = [
  {
    title: 'Cappuccino',
    subtitle: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: '/src/images/cappuccino.png',
  },
  {
    title: 'Chai Latte',
    subtitle: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: '/src/images/chai latte.png',
  },
  {
    title: 'Macchiato',
    subtitle: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: '/src/images/macchiato.png',
  },
  {
    title: 'Expresso',
    subtitle: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: '/src/images/expresso.png',
  },
]

function HeroContent2() {
  const navigate = useNavigate()

  return (
    <section id="coffee-menu" className="hero2-section">
      <div className="hero2-header">
        <h2>Enjoy a new blend of coffee style</h2>
        <p>
          Explore all flavours of coffee with us.
           There is always a new cup
          worth experiencing
        </p>
      </div>

      <div className="hero2-grid">
        {coffeeItems.map((item, index) => (
          <article key={item.title} className="hero2-card">
            <img
              src={item.image}
              alt={item.title}
              className="hero2-card-image"
            />
            <div className="hero2-card-body">
              <h3 className="hero2-card-title">{item.title}</h3>
              <p className="hero2-card-subtitle">{item.subtitle}</p>
              <p className="hero2-card-price">{item.price}</p>
              <button
                className="hero2-card-button"
                type="button"
                onClick={() => navigate('/checkout')}
              >
                Order Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HeroContent2
