import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleRemember(event) {
        setRemember(event.target.checked);
    }

    function submitForm(event) {
        event.preventDefault();
        console.log(email, password, remember);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Form onSubmit={submitForm} className="d-flex flex-column">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            checked={remember}
                            onChange={handleRemember}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
