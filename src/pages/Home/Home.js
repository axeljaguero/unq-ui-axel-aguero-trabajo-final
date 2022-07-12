import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [humanChoice, setHumanChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const possibleChoice = [
        {
            name: 'Rock',
            image: 'rock.png',
        },
        {
            name: 'Paper',
            image: 'paper.png',
        },
        {
            name: 'Scissors',
            image: 'scissors.png',
        },
        {
            name: 'Lizard',
            image: 'lizard.png',
        },
        {
            name: 'Spock',
            image: 'spock.png',
        }
    ];

    const randomChoice = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        return possibleChoice[randomNumber].name;
    }

    const humanChoiceHandler = (event) => {
        console.log(event)
        setHumanChoice(event);
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
            <br />
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
            <br />
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
            <br />
            <Row>
                <Col md={10}>
                    <Card>
                        <Card.Title align="center">Pick an option</Card.Title>
                    </Card>
                    <CardGroup>
                        {possibleChoice.map((choice, index) => {
                            return (
                                <Card key={choice.name+"card"}>
                                    <Card.Img variant="top" src={choice.image} />
                                    <Card.Body align="center">
                                        <Button variant="primary" onClick={() => humanChoiceHandler(choice.name)}>{choice.name}</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </CardGroup>
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