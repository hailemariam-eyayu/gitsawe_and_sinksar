import React from "react";
import "./Footer.css";
import { assets } from "../../assets/admin_assets/assets.js";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#323232" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
            
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="logo-container">
                        <img src={assets.logo} alt="E-Gitsawe Logo" />
                        <div className="logo-text">
                            <span>E-Gitsawe</span>
                            <span>& Sinksar</span>
                        </div>
                    </div>
                    <p>
                        Your digital gateway to Ethiopian Orthodox Tewahedo Church traditions. 
                        Explore liturgical calendars, sacred texts, and spiritual resources 
                        designed to deepen your faith journey.
                    </p>
                    <div className="footer-social-icons">
                        <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
                        <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
                        <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
                        <a href="#"><img src={assets.instagram_icon} alt="Instagram" /></a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-content-center">
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="#">Liturgical Calendar</a></li>
                        <li><a href="#">Daily Readings</a></li>
                        <li><a href="#">Prayer Times</a></li>
                        <li><a href="#">Saints of the Day</a></li>
                        <li><a href="#">Spiritual Guidance</a></li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>
                            <img src={assets.phone_icon} alt="Phone" />
                            <span>+251-938169557</span>
                        </li>
                        <li>
                            <img src={assets.email_icon} alt="Email" />
                            <span>hailemariameyayu2012@gmail.com</span>
                        </li>
                        <li>
                            <img src={assets.location_icon} alt="Location" />
                            <span>Addis Ababa, Ethiopia</span>
                        </li>
                    </ul>
                    <div className="newsletter">
                        <h3>Subscribe to Newsletter</h3>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-copyright">
                    Copyright © 2017 E.C e-gitsawe_and_sinksar.com. All Rights Reserved.
                </p>
                <div className="footer-payments">
                    <img src={assets.visa_icon} alt="Visa" />
                    <img src={assets.mastercard_icon} alt="Mastercard" />
                    <img src={assets.paypal_icon} alt="PayPal" />
                </div>
            </div>
        </div>
    );
};

export default Footer;