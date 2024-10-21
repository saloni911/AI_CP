import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for React 18
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create a root using the new createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component
root.render(
  <StrictMode>
    <App className='app' />
  </StrictMode>
);

// Optionally register the service worker
serviceWorker.unregister();
