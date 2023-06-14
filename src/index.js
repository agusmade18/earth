import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
