import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLinkWrapper from '../utils/NavLinkWrapper';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header(props) {
    return (
        <>
            <Navbar bg="primary" variant="dark" className={'mb-3'}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="logo__link">
                            Azeno
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLinkWrapper to="/train">Train</NavLinkWrapper>
                        <NavLinkWrapper to="/profile">Profile</NavLinkWrapper>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
