import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Axios from "axios";

function NumSubtractor() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
    const [resultsHistory, setResultsHistory] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const parsedNumber1 = parseFloat(number1);
        const parsedNumber2 = parseFloat(number2);

        if (isNaN(parsedNumber1) || isNaN(parsedNumber2)) {
            setResult("Please enter valid numbers.");
        } else {
            try {
                const response = await Axios.post("http://localhost:5000/subtract", {
                    num1: parsedNumber1,
                    num2: parsedNumber2
                });

                setResult(`The result of ${parsedNumber1} - ${parsedNumber2} is ${response.data.result}.`);
                fetchResults(); // Fetch updated history after calculation
            } catch (error) {
                setResult("Error communicating with the server.");
            }
        }
    };

    const fetchResults = async () => {
        try {
            const response = await Axios.get('http://localhost:5000/results');
            setResultsHistory(response.data);
        } catch (error) {
            console.error("Error fetching results:", error);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 bg-success">
            <Row className="bg-warning p-4 rounded shadow w-100">
                <Col md={6} sm={12} lg={6} className="mt-3">
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Subtraction Calculator</h2>

                        <Form.Group className="mb-3" controlId="formBasicNumber1">
                            <Form.Label>Enter the first number:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First number"
                                value={number1}
                                onChange={(e) => setNumber1(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber2">
                            <Form.Label>Enter the second number:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Second number"
                                value={number2}
                                onChange={(e) => setNumber2(e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary w-100">Subtract</Button>
                    </Form>
                </Col>
                <Col md={6} sm={12} lg={6} className="mt-3">
                    <h2 className="text-center mb-4">Result:</h2>
                    <p className="text-center">{result}</p>
                    
                   
                </Col>
            </Row>
        </Container>
    );
}

export default NumSubtractor;
