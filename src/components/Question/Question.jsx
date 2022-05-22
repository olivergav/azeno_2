import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import './Question.scss';

function Question({ question, answer, updateNextQuestion }) {
    const [toggle, setToggle] = useState(false);

    function handleFlip() {
        setToggle(true);
    }

    function handleAnswer() {
        setToggle(false);
        setTimeout(() => {
            updateNextQuestion();
        }, 250);
    }

    return (
        <div className={toggle ? 'flip-card active' : 'flip-card'}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card onClick={handleFlip}>
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
