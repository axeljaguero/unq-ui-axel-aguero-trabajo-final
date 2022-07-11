import { React, useState, useEffect} from 'react';
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
        if (humanChoice === computerChoice) {
            setResult('Draw');
        } else if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
            (humanChoice === 'Lizard' && computerChoice === 'Paper') ||
            (humanChoice === 'Spock' && computerChoice === 'Rock')
        ) {
            setResult('You win');
            setScore(score + 1);
        } else {
            setResult('You lose');
            setComputerScore(computerScore + 1);
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
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Your Choice</h5>
                            <p className="card-text">
                                {humanChoice}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Computer Choice</h5>
                            <p className="card-text">
                                {computerChoice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Result</h5>
                            <p className="card-text">
                                {result}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Score</h5>
                            <p className="card-text">
                                You: {score}
                                <br />
                                Computer: {computerScore}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {possibleChoice.map((choice, index) => {
                        return(
                            <button key={index} className="btn btn-primary" onClick={humanChoiceHandler} value={choice}>
                                {choice}
                            </button>
                        )
                    }
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={restartGame}>Restart</button>
                </div>
            </div>
        </div>

    )
}

export default Home;