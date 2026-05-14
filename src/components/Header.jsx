import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="top-bar">
        <h1 className="logo">Bean Scene</h1>
        <nav>
          <h2 className="nav-item home">Home</h2>
          <h2 className="nav-item menu">Menu</h2>
          <h2 className="nav-item contact">Contact Us</h2>
        </nav>
        <div className="buttons">
          <button className="signIn">Sign In</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">We’ve got your morning covered with</p>
        <h1 className="hero-title">Coffee</h1>
        <p className="hero-copy">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="orderBtn">Order Now</button>
      </div>
    </header>
  );
}

export default Header;
