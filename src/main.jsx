//* LIB
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//* APP
import App from './App.jsx';

//* SCSS
import '@/styles/globals/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
