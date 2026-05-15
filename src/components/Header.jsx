import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const scrollToMenu = () => {
    const el = document.getElementById("coffee-menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="top-bar">
        <h1 className="logo">Bean Scene</h1>
        <nav>
          <h2 className="nav-item home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</h2>
          <h2 className="nav-item menu" onClick={scrollToMenu}>Menu</h2>
          <h2 className="nav-item contact" onClick={() => scrollToSection("contact")}>Contact Us</h2>
        </nav>
        <div className="buttons">
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button className="signUp" onClick={logout}>Sign Out</button>
            </>
          ) : (
            <>
              <button className="signIn" onClick={() => navigate("/signin")}>Sign In</button>
              <button className="signUp" onClick={() => navigate("/signup")}>Sign Up</button>
            </>
          )}
        </div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">We've got your morning covered with</p>
        <h1 className="hero-title">Coffee</h1>
        <p className="hero-copy">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="orderBtn" onClick={() => navigate("/checkout")}>Order Now</button>
      </div>
    </header>
  );
}

export default Header;
