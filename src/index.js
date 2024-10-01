import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.min.css';  // Import Bulma CSS framework
import './styles/custom.css';      // Custom CSS for any overrides or additional styling

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
