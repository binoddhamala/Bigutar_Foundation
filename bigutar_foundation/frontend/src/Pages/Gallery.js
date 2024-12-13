import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Gallery.css';
import Layout from '../Components/Layout/Layout';

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
    <div className="gallery-container1">
      {galleries.map((gallery) => (
        <div key={gallery.id} className="gallery1">
        
          <div className="gallery-grid1">
            {gallery.items.map((item) => (
              <div key={item.id} className="gallery-item1">
                {item.media_type === 'image' ? (
                  <img src={`http://localhost:8000${item.image}`} alt={item.caption} />
                ) : (
                  <video controls>
                    <source src={`http://localhost:8000${item.video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Gallery;
