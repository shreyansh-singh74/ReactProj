import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Get the root element from the html
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);