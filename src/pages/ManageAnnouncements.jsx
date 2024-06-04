// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './ManageAnnouncements.css';

const ManageAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => setAnnouncements(response.data))
      .catch(error => console.error('Error fetching announcements:', error));
  };

  const onSubmit = data => {
    // Replace this with actual API call to add announcement
    console.log('Announcement added:', data);
    reset();
  };

  const deleteAnnouncement = id => {
    // Replace this with actual API call to delete announcement
    console.log('Announcement deleted:', id);
  };

  return (
    <div className="manage-announcements">
      <h2>Manage Announcements</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" {...register('title', { required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea id="body" {...register('body', { required: true })}></textarea>
        </div>
        <button type="submit">Add Announcement</button>
      </form>
      <ul className="announcement-list">
        {announcements.map(announcement => (
          <li key={announcement.id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.body}</p>
            <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAnnouncements;
