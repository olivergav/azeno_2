import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function CardSet({ id, name, level, quantity, image }) {
    return (
        <Link to={`/train/${id}`}>
            <Card>
                <Card.Img variant="top" src={`/assets/img/${image}?text=${name}`} alt={name} />
            </Card>
        </Link>
    );
}

export default CardSet;
