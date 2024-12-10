

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AdminUploadForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('post', data.post);
    formData.append('image', data.image[0]);

    axios.post('http://localhost:8000/api/team/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      alert('Gallery item uploaded successfully!');
      reset();
    })
    .catch(error => {
      console.error('There was an error uploading the item!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name')} required />
      </div>
      <div>
        <label>Post:</label>
        <textarea {...register('post')} required></textarea>
      </div>
      <div>
        <label>Image:</label>
        <input type="file" {...register('image')} required />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default AdminUploadForm;
