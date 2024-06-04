// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Announcements.css';
import Loader from './Loader';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        setAnnouncements(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching announcements:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="announcements">
      <h2>Announcements</h2>
      {loading ? <Loader /> : announcements.map(announcement => (
        <div key={announcement.id} className="announcement">
          <h3>{announcement.title}</h3>
          <p>{announcement.body}</p>
        </div>
      ))}
    </section>
  );
};

export default Announcements;
