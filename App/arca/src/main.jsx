import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Banner from '../components/bannerIndex.jsx';
import '../assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Banner />
  </React.StrictMode>
);
