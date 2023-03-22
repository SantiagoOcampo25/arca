import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Banner from '../components/bannerIndex.jsx';
import AboutUs from '../components/aboutusIndex';
import '../assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Banner />
    <AboutUs />
  </React.StrictMode>
);
