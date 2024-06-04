// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './ManageEvents.css';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5&_start=5')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  };

  const onSubmit = data => {
    // Replace this with actual API call to add event
    console.log('Event added:', data);
    reset();
  };

  const deleteEvent = id => {
    // Replace this with actual API call to delete event
    console.log('Event deleted:', id);
  };

  return (
    <div className="manage-events">
      <h2>Manage Events</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" {...register('title', { required: true })} />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea id="body" {...register('body', { required: true })}></textarea>
        </div>
        <button type="submit">Add Event</button>
      </form>
      <ul className="event-list">
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.body}</p>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;
