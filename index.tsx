import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Check if the root element exists before attempting to mount.
// This prevents errors when running in static HTML mode where 'root' is replaced by static content.
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}