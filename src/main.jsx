import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // No need for .jsx extension here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);