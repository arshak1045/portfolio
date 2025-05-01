/**
 * Application Entry Point
 * 
 * This is the main entry file for the React application that:
 * - Renders the root React component to the DOM
 * - Applies global CSS styles
 * 
 * The file follows the standard React application structure with
 * the App component rendered into a root DOM element.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
// StrictMode is enabled for better development experience and to catch potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
