import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout/Layout';
import "../Styles/Gallery.css"

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  const fetchGalleries = async () => {
    try {
      const response = await axios.get('http://localhost:8000/galleries/');
      setGalleries(response.data);
    } catch (error) {
      console.error("Error fetching galleries:", error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  return (
    <Layout>
      <section className='gallery-section1'>
    <div className="gallery-container1">
      <h3>Gallery</h3>
      {galleries.map((gallery) => (
        <div key={gallery.id} className="gallery1">
          <div className="gallery-grid1">
            {gallery.items.map((item) => (
              <div key={item.id} className="gallery-item1">
                <img src={`http://localhost:8000${item.image}`} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </section>
    </Layout>
  );
};

export default Gallery;
