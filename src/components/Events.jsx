// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.css';
import Loader from './Loader';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5&_start=5')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      {loading ? <Loader /> : events.map(event => (
        <div key={event.id} className="event">
          <h3>{event.title}</h3>
          <p>{event.body}</p>
        </div>
      ))}
    </section>
  );
};

export default Events;
