import React, { useState } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        if (openFAQ === index) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(index);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing the best hotel booking services for your travels in Syria.</p>
                </div> */}

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section faq">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(1)}>
                            <span>What is the cancellation policy?</span>
                            <FontAwesomeIcon icon={openFAQ === 1 ? faChevronUp : faChevronDown} />
                        </div>
                        {openFAQ === 1 && (
                            <div className={`faq-answer ${openFAQ === 1 ? 'open' : ''}`}>
                                <p>You can cancel up to 24 hours before the booking date without a fee.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(2)}>
                            <span>How do I make a booking?</span>
                            <FontAwesomeIcon icon={openFAQ === 2 ? faChevronUp : faChevronDown} />
                        </div>
                        {openFAQ === 2 && (
                            <div className={`faq-answer ${openFAQ === 2 ? 'open' : ''}`}>
                                <p>Simply search for hotels, choose your room, and complete the payment online.</p>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(3)}>
                            <span>Are there any additional fees?</span>
                            <FontAwesomeIcon icon={openFAQ === 3 ? faChevronUp : faChevronDown} />
                        </div>
                        {openFAQ === 3 && (
                            <div className={`faq-answer ${openFAQ === 3 ? 'open' : ''}`}>
                                <p>No, there are no hidden fees. The price you see is the price you pay.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* New Contact Us Section */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>For inquiries...</p>
                    <p> call us at: <strong>+963 991 951 452</strong></p>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Syria Hotels. All rights reserved.</p>
                <p>Powered by Yaman Ajlouni</p>
            </div>
        </footer>
    );
};

export default Footer;
