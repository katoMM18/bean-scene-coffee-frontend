import React from 'react'
import './Footer.css'
import appIcons from '../images/app icons.png'

function Footer() {
  return (
    <>
      <footer className="footer"
      >
        <div className="footer-content">
          <div className="footer-left">
            <h1>Bean Scene</h1>
            <p className="lorem2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <div className="social-icons">
              <img src={appIcons} alt="App icons" />
            </div>
          </div>

          <div className="footer-about footer-section">
            <h2>About Us</h2>
            <p>Menu</p>
            <p>Features</p>
            <p>Help & Support</p>
          </div>

          <div className="footer-company footer-section">
            <h2>Company</h2>
            <p>How we work</p>
            <p>Terms of Service</p>
            <p>Pricing</p>
          </div>

          <div className="footer-contact footer-section">
            <h2>Contact Us</h2>
            <p className="address">
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
            </p>
            <p className="num">+1 202-918-2132</p>
            <p className="email">beanscene@mail.com</p>
            <p className="website">www.beanscene.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer