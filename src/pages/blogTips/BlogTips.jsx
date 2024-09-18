import React from 'react';
import './BlogTips.scss';

const blogs = [
  {
    title: 'Top 10 Places to Visit in Syria',
    image: require('../../assets/images/damascus/damascusCity.jpg'),
    link: '/blog/top-10-places-to-visit-in-syria',
    description: 'Discover the hidden gems of Syria with our guide on the top places you must visit.'
  },
  {
    title: 'Best Time to Visit Damascus',
    image: require('../../assets/images/damascus/damascusCity.jpg'),
    link: '/blog/best-time-to-visit-damascus',
    description: 'Learn when the best time is to explore the beautiful city of Damascus.'
  },
  {
    title: 'How to Choose the Right Hotel for Your Trip',
    image: require('../../assets/images/damascus/damascusCity.jpg'),
    link: '/blog/choose-the-right-hotel',
    description: 'Find out how to pick the perfect hotel based on your preferences and budget.'
  }
];

const BlogTips = () => {
  return (
    <div className="blog-section">
      <h2>Travel Tips & Blog</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTips;
