import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';
import './index.css';

const elly = document.getElementById('root');
const root = createRoot(elly);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);