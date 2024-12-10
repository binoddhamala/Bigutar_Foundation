import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/UploadNews.css";

const UploadNews = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('content', content);

    try {
      await axios.post('http://localhost:8000/api/news/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('News uploaded successfully');
    } catch (error) {
      console.error('There was an error uploading the news!', error);
    }
  };

  return (
    <div>
      <h1>Upload News</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadNews;
