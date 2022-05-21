import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavLinkWrapper({ to, children }) {
    const navigate = useNavigate();

    const handleRedirect = (event) => {
        event.preventDefault();
        navigate(event.target.getAttribute('to'));
    };

    return (
        <Nav.Link to={to} onClick={handleRedirect}>
            {children}
        </Nav.Link>
    );
}

export default NavLinkWrapper;
