import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from '../App.jsx';

const root = ReactDOMClient.createRoot(document.getElementById('popup-root'));
root.render(<App />);
