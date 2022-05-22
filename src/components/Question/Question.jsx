import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import './Question.scss';

function Question({ question, answer }) {
    const [toggle, setToggle] = useState(false);

    function handleFlip() {
        setToggle(true);
    }

    function handleAnswer() {
        console.log('it works');
    }

    return (
        <div className={toggle ? 'flip-card active' : 'flip-card'} onClick={handleFlip}>
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
                        </Card.Body>
                        <Card.Footer>
                            <div className="answer-btn">
                                <Button variant="success" onClick={handleAnswer}>
                                    Wiedziałem
                                </Button>
                                <Button variant="primary" onClick={handleAnswer}>
                                    Nie byłem pewny
                                </Button>
                                <Button variant="danger" onClick={handleAnswer}>
                                    Nie wiedziałem
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Question;
