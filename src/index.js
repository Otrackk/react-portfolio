import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, HashRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
                <HashRouter>
                        <Routes>
                                <Route path='/*' element={<App />} />
                        </Routes>
                </HashRouter>
        </React.StrictMode>
);