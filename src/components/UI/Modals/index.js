import React from 'react';

import {Modal, Form, Button} from "react-bootstrap";

export const RedactModal = (props) => {
    const {modal, setModal, user, setUser, redactUser} = props;

    const closeRedactModal = () => {
        setModal({...modal, redact: false});
    }

    const saveChanges = () => {
        redactUser(user);
        setModal({...modal, redact: false});
    }

    return (
        <Modal
            show={modal.redact}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={closeRedactModal}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Redact user
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="Form.firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            value={user.first_name}
                            onChange={(e) => setUser({...user, first_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={user.last_name}
                            onChange={(e) => setUser({...user, last_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={user.gender} onChange={(e) => setUser({...user, gender: e.target.value})}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="???">The strange thing</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ip address</Form.Label>
                        <Form.Control
                            type="text"
                            value={user.ip_address}
                            onChange={(e)=> setUser({...user, ip_address: e.target.value})}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeRedactModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
