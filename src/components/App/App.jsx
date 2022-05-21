import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import Button from 'react-bootstrap/Button';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Link to="/profile">Profile</Link>} />
                <Route path="/profile" element={<Link to="/">Home</Link>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
