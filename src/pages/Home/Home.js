import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import './style.css';

const Home = () => {

    const [humanChoice, setHumanChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const possibleChoice = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

    const randomChoice = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        return possibleChoice[randomNumber];
    }

    const humanChoiceHandler = (event) => {
        setHumanChoice(event.target.value);
        computerChoiceHandler();
    }

    const computerChoiceHandler = () => {
        setComputerChoice(randomChoice());
    }

    const compare = () => {
        if (humanChoice === 'Rock') {
            switch (computerChoice) {
                case 'Rock': setResult('Draw'); break;
                case 'Paper': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Scissors': setResult('Human wins'); setScore(score + 1); break;
                case 'Lizard': setResult('Human wins'); setScore(score + 1); break;
                case 'Spock': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                default:
            }
        }
        if (humanChoice === 'Paper') {
            switch (computerChoice) {
                case 'Rock': setResult('Human wins'); setScore(score + 1); break;
                case 'Paper': setResult('Draw'); break;
                case 'Scissors': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Lizard': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Spock': setResult('Human wins'); setScore(score + 1); break;
                default:
            }
        }
        if (humanChoice === 'Scissors') {
            switch (computerChoice) {
                case 'Rock': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Paper': setResult('Human wins'); setScore(score + 1); break;
                case 'Scissors': setResult('Draw'); break;
                case 'Lizard': setResult('Human wins'); setScore(score + 1); break;
                case 'Spock': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                default:
            }
        }
        if (humanChoice === 'Lizard') {
            switch (computerChoice) {
                case 'Rock': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Paper': setResult('Human wins'); setScore(score + 1); break;
                case 'Scissors': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Lizard': setResult('Draw'); break;
                case 'Spock': setResult('Human wins'); setScore(score + 1); break;
                default:
            }
        }
        if (humanChoice === 'Spock') {
            switch (computerChoice) {
                case 'Rock': setResult('Human wins'); setScore(score + 1); break;
                case 'Paper': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Scissors': setResult('Human wins'); setScore(score + 1); break;
                case 'Lizard': setResult('Computer wins'); setComputerScore(computerScore + 1); break;
                case 'Spock': setResult('Draw'); break;
                default:
            }
        }
    }

    const restartGame = () => {
        setHumanChoice(null);
        setComputerChoice(null);
        setResult(null);
        setComputerScore(0);
        setScore(0);
    }

    useEffect(() => {
        if (humanChoice && computerChoice) {
            compare();
        }
    }, [humanChoice, computerChoice])

    return (
        <Container>
            <br/>
            <Row>
                <Col md={5}>
                    <Card md="auto">
                        <Card.Body>
                            <Card.Title>Your Choice</Card.Title>
                            <Card.Text>
                                {humanChoice}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card md="auto">
                        <Card.Body>
                            <Card.Title>Computer Choice</Card.Title>
                            <Card.Text>
                                {computerChoice}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={5}>
                    <Card md="auto">
                        <Card.Body>
                            <Card.Title>Result</Card.Title>
                            <ResultCard result={result} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card md="auto">
                        <Card.Body>
                            <Card.Title>Score</Card.Title>
                            <Card.Body>
                                You: {score}
                                <br />
                                Computer: {computerScore}
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={{ span: "auto", offset: 3 }}>
                    <Card md="auto">
                        <Card.Body>
                            <Card.Title>Pick a choice</Card.Title>
                            <ButtonGroup aria-label="choices-buttons">
                                {possibleChoice.map((choice, index) => {
                                    return (
                                        <Button key={index} variant="primary" onClick={humanChoiceHandler} value={choice}>
                                            {choice}
                                        </Button>
                                    )
                                })}
                            </ButtonGroup>
                            <br/>
                            <br/>
                            <Button variant="secondary" onClick={restartGame}>Restart game</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

function ResultCard({ result }) {
    switch (result) {
        case 'Draw': return <Alert variant="secondary">{result}</Alert>
        case 'Human wins': return <Alert variant="success">{result}</Alert>
        case 'Computer wins': return <Alert variant="danger">{result}</Alert>
        default: return <Alert variant="info">Make a play</Alert>
    }
}

export default Home;