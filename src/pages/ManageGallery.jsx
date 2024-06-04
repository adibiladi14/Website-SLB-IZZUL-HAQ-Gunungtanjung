// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './ManageGallery.css';

const ManageGallery = () => {
  const [gallery, setGallery] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => setGallery(response.data))
      .catch(error => console.error('Error fetching gallery:', error));
  };

  const onSubmit = data => {
    // Replace this with actual API call to add gallery image
    console.log('Image added:', data);
    reset();
  };

  const deleteImage = id => {
    // Replace this with actual API call to delete gallery image
    console.log('Image deleted:', id);
  };

  return (
    <div className="manage-gallery">
      <h2>Manage Gallery</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" {...register('title', { required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input id="url" {...register('url', { required: true })} />
        </div>
        <button type="submit">Add Image</button>
      </form>
      <ul className="gallery-list">
        {gallery.map(image => (
          <li key={image.id}>
            <img src={image.thumbnailUrl} alt={image.title} />
            <h3>{image.title}</h3>
            <button onClick={() => deleteImage(image.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageGallery;
