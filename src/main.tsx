import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import HashRouter for GitHub Pages routing
import { HashRouter } from 'react-router-dom';

// Render the App component wrapped with HashRouter to ensure routing works on GitHub Pages
createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);