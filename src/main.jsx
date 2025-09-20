import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there is an element with id 'root' in your HTML.");
}
