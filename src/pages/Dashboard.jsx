
import  { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Fetch unique visitors count from backend
    axios.get('/api/dashboard/visitors')
      .then(response => setVisitors(response.data.count))
      .catch(error => console.error('Error fetching visitors:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Unique Visitors: {visitors}</p>
    </div>
  );
}

export default Dashboard;
