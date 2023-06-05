import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../assets/css/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from "../components/Context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
      <App />
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
