import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li onClick={handleShow}>
                About me
            </li>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>About me</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>My name is Axel Agüero. I am a software developer, currently studying at <a href="http://www.unq.edu.ar/">UNQ</a>.</p>
                    <br />
                    <p>This is a final work for UI subject.</p>
                    <p>The proyect is hosted in <a href="https://github.com/axeljaguero/unq-ui-axel-aguero-trabajo-final">GitHub</a>.</p>
                    <br />
                    <p>My email is <a href="mailto:axeljaguero@gmail.com">this</a>.</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}