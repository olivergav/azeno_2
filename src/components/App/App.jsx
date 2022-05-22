import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import './App.scss';
import Header from '../Header/Header';
import useCookie from '../hooks/useCookie';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import QuestionList from '../QuestionList/QuestionList';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<Link to="/profile">Profile</Link>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/train" element={<Train />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="train/:id" element={<QuestionList />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
