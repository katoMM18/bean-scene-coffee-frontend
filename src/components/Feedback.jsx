import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <section className="feedback-section">
      <div className="feedback-header">
        <h2>Our coffee perfection feedback</h2>
        <p>Our customers have amazing things to say about us.</p>
      </div>

      <div className="feedback-card">
        <span className="feedback-quote-mark">“</span>
        <p className="feedback-text">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <div className="feedback-author-card">
          <div className="feedback-avatar">JT</div>
          <div className="feedback-author-info">
            <h3>Jonny Thomas</h3>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
