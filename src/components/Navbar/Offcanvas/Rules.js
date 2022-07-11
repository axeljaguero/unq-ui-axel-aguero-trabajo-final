import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Rules() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li onClick={handleShow}>
                Rules
            </li>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Rules</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.</p>
                    <br />
                    <p>Almost always, the boys will all pick Spock at the same time and tie over and over again.</p>
                    <br/>
                    <img className="rules-img" src="rpsls.png" alt="" height="300"/>
                    <br />
                    <p>Scissors cuts Paper</p>
                    <p>Paper covers Rock</p>
                    <p>Rock crushes Lizard</p>
                    <p>Lizard poisons Spock</p>
                    <p>Spock smashes Scissors</p>
                    <p>Scissors decapitates Lizard</p>
                    <p>Lizard eats Paper</p>
                    <p>Paper disproves Spock</p>
                    <p>Spock vaporizes Rock</p>
                    <p>(and as it always has) Rock crushes Scissors</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}