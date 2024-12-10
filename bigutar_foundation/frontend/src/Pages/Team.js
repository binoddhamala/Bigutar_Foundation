import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Styles/Team.css";
import Layout from '../Components/Layout/Layout';

const Team = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/team/')
      .then(response => {
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the gallery items!', error);
      });
  }, []);

  return (
    <Layout>
      <section>
    <div className="gallery">
      <h3>Team Members</h3>
      {galleryItems.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.image} />
          <h2>{item.name}</h2>
          <p>{item.post}</p>
        </div>
      ))}
    </div>
    </section>
    </Layout>
  );
};

export default Team;
