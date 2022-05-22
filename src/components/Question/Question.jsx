import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import './Question.scss';

function Question() {
    const [question] = useState('Czy w JS wszystko jest obiektem?');
    const [answer] = useState(
        'Z technicznego punktu widzenia: nie. Typy proste są opakowywane obiektami.'
    );

    const [toggle, setToggle] = useState(false);

    function handleAnswer() {
        setToggle(true);
    }

    return (
        <div className={toggle ? 'flip-card active' : 'flip-card'} onClick={handleAnswer}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card>
                        <Card.Header as="h5">Javascript</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Text>{question}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card>
                        <Card.Header as="h5">Javascript</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Text>{answer}</Card.Text>
                            <div className="answer-btn">
                                <Button variant="primary">Wiedziałem</Button>
                                <Button variant="primary">Nie byłem pewny</Button>
                                <Button variant="primary">Nie wiedziałem</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Question;
