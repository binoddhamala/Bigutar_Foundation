import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';
import '../Styles/News.css'
const Event = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/news/')
      .then(response => {
        setNewsItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the news!', error);
      });
  }, []);

  return (
    <Layout>
<section id="event" className="about--section">
    <div className="news-container">
      <h3>Events</h3>
      {newsItems.map(item => (
        <div key={item.id} className="news-item">
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.content}</p>
          <small>{new Date(item.created_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
    </section>
    </Layout>
  );
};

export default Event;
