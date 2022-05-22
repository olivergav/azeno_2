import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import useCookie from '../hooks/useCookie';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Link to="/profile">Profile</Link>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/train" element={<Train />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
