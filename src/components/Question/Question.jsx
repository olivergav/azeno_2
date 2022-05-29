import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

import './Question.scss';

function Question({ question, answer, updateNextQuestion, category, id }) {
    const [toggle, setToggle] = useState(false);

    function handleFlip() {
        setToggle(true);
    }

    async function handleQuestionDateUpdate(days) {
        axios
            .put(`http://localhost:3010/cards/${id}`, {
                id,
                category,
                question,
                answer,
                answerdate: new Date().setDate(new Date().getDate() + days)
            })
            .catch((error) => {
                throw new Error('Something went wrong!', error);
            });
    }

    function handleAnswer(days) {
        setToggle(false);
        handleQuestionDateUpdate(days).catch(() => {});

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
                                <Button variant="success" onClick={() => handleAnswer(7)}>
                                    Wiedziałem
                                </Button>
                                <Button variant="primary" onClick={() => handleAnswer(3)}>
                                    Nie byłem pewny
                                </Button>
                                <Button variant="danger" onClick={() => handleAnswer(1)}>
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
