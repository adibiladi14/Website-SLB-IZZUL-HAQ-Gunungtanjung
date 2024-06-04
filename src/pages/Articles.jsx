// src/pages/Articles.jsx
import  { useState, useEffect } from 'react';
//import axios from ' ../services/api';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    axios.get('/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Artikel</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
