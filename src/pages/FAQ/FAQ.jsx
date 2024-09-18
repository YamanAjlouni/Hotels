import React, { useState } from 'react';
import './FAQ.scss';

const faqs = [
  {
    question: 'What is the cancellation policy?',
    answer: 'Our cancellation policy allows free cancellation up to 24 hours before your stay.'
  },
  {
    question: 'How do I make a booking?',
    answer: 'You can make a booking through our website by selecting your destination, dates, and hotel.'
  },
  {
    question: 'Are there any additional fees?',
    answer: 'No Any Taxes or Fees.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
