// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import SchoolInfo from '../components/SchoolInfo';
import PrincipalsMessage from '../components/PrincipalsMessage';

const Home = () => (
  <div className="home">
    <h2>Welcome to SLB Izzul Haq Gunungtanjung</h2>
    <p>Providing quality education for special needs students.</p>
    <Announcements />
    <Events />
    <Gallery />
    <Testimonials />
    <SchoolInfo />
    <PrincipalsMessage />
  </div>
);

export default Home;
