import React, { useEffect } from 'react';
import { Link, Route, useNavigate, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

function CookieWrapper({ cookie }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (cookie === undefined) {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <Routes>
                {cookie ? (
                    <>
                        <Route path="/" element={<Link to="/profile">Profile</Link>} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/train" element={<Train />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
            </Routes>
        </>
    );
}

export default CookieWrapper;
