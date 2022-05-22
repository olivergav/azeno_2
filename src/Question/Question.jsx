import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

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
        <Card onClick={handleAnswer}>
            <Card.Header as="h5">JavaScript</Card.Header>
            <Card.Body>
                <Card.Text>{!toggle ? question : answer}</Card.Text>
                {toggle && (
                    <div className={'d-flex justify-content-between'}>
                        <Button variant="primary">Wiedziałem</Button>
                        <Button variant="primary">Nie byłem pewny</Button>
                        <Button variant="primary">Nie wiedziałem</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default Question;
