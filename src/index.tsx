import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

console.log('React app starting...');

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
