import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
<div className="footer-content">
<div className="footer-section">
<h3>BrdStore</h3>
<p>Quality products and thoughtful service for all your needs.</p>
</div>


<div className="footer-section">
<h4>Contact Us</h4>
<p>Phone: +234415515161</p>
<p>Email: hello@brd.com</p>
<p>Igando, Lagos</p>
</div>


<div className="footer-section">
<h4>Business Hours</h4>
<p>Mon–Fri: 9:00 — 18:00</p>
<p>Sat: 10:00 — 14:00</p>
<p>Sun: Closed</p>
</div>
</div>


<div className="footer-bottom">
<p>© {new Date().getFullYear()} BrdStore. All rights reserved.</p>
</div>
</footer>
  );
};

export default Footer;
