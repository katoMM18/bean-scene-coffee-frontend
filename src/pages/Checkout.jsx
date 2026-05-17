import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Checkout.css";

const coffeeMenu = [
  { name: "Cappuccino", price: 8.5, image: "/src/images/cappuccino.png" },
  { name: "Chai Latte", price: 8.5, image: "/src/images/chai latte.png" },
  { name: "Macchiato", price: 8.5, image: "/src/images/macchiato.png" },
  { name: "Expresso", price: 8.5, image: "/src/images/expresso.png" },
];

export default function Checkout() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const saved = sessionStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) {
        return prev.map((c) =>
          c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.name === name ? { ...c, quantity: c.quantity + delta } : c,
        )
        .filter((c) => c.quantity > 0),
    );
  };

  const removeItem = (name) => {
    setCart((prev) => prev.filter((c) => c.name !== name));
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart");
  };

  const total = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
  const itemCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  const placeOrder = async () => {
    if (!user) {
      navigate("/signin");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://bean-scene-coffee-backend.vercel.app/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ items: cart, total }),
        },
      );
      if (!res.ok) throw new Error("Order failed");
      setCart([]);
      sessionStorage.removeItem("cart");
      setMessage("Order placed successfully!");
    } catch {
      setMessage("Failed to place order. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-topbar">
        <Link to="/" className="checkout-topbar-link">
          &larr; Back
        </Link>
        <h1>Checkout</h1>
        {user ? (
          <span className="checkout-user">{user.name}</span>
        ) : (
          <Link to="/signin" className="checkout-topbar-link">
            Sign In
          </Link>
        )}
      </div>

      <h2 className="checkout-section-title">Menu</h2>
      <div className="checkout-menu-grid">
        {coffeeMenu.map((item) => (
          <div key={item.name} className="checkout-menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="checkout-menu-price">${item.price.toFixed(2)}</p>
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="checkout-section-title">
        Your Cart{" "}
        {itemCount > 0 && <span className="checkout-count">({itemCount})</span>}
      </h2>
      {cart.length === 0 ? (
        <div className="checkout-empty">
          <p>Your cart is empty</p>
          <p className="checkout-empty-hint">Add items from the menu above</p>
        </div>
      ) : (
        <div className="checkout-cart">
          {cart.map((item) => (
            <div key={item.name} className="checkout-cart-item">
              <div className="checkout-cart-info">
                <strong>{item.name}</strong>
                <span className="checkout-cart-price">
                  ${item.price.toFixed(2)} each
                </span>
              </div>
              <div className="checkout-qty">
                <button
                  className="checkout-qty-btn"
                  onClick={() => updateQuantity(item.name, -1)}
                >
                  -
                </button>
                <span className="checkout-qty-value">{item.quantity}</span>
                <button
                  className="checkout-qty-btn"
                  onClick={() => updateQuantity(item.name, 1)}
                >
                  +
                </button>
              </div>
              <span className="checkout-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="checkout-remove"
                onClick={() => removeItem(item.name)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="checkout-cart-footer">
            <button className="checkout-clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <div className="checkout-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
          <button
            className="checkout-order-btn"
            onClick={placeOrder}
            disabled={isSubmitting || cart.length === 0}
          >
            {isSubmitting
              ? "Placing Order..."
              : user
                ? "Place Order"
                : "Sign In to Order"}
          </button>
        </div>
      )}

      {message && <p className="checkout-message">{message}</p>}
    </div>
  );
}
