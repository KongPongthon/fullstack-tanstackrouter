import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './config/provider';

const rootElement = document.getElementById('root')!;
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
