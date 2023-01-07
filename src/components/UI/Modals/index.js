import React, {useState} from 'react';

import {Modal, Form, Button} from "react-bootstrap";

import {nanoid} from "nanoid";

export const RedactModal = (props) => {
    const {modal, setModal, newUser, setNewUser, redactUser} = props;

    const closeRedactModal = () => {
        setModal({...modal, redact: false});
    }

    const saveChanges = () => {
        redactUser(newUser);
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
                    Redact newUser
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
                            value={newUser.first_name}
                            onChange={(e) => setNewUser({...newUser, first_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser.last_name}
                            onChange={(e) => setNewUser({...newUser, last_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser.email}
                            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={newUser.gender} onChange={(e) => setNewUser({...newUser, gender: e.target.value})}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="???">The strange thing</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ip address</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser.ip_address}
                            onChange={(e)=> setNewUser({...newUser, ip_address: e.target.value})}
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


export const CreateModal = (props) => {
    const {modal, setModal, createUser} = props;
    const [newUser, setNewUser] = useState({
        id: nanoid(),
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: "",
    });
    const closeCreateModal = () => {
        setModal({...modal, create: false});
    }

    const saveChanges = () => {
        createUser(newUser);
        setModal({...modal, create: false});
    }

    return (
        <Modal
            show={modal.create}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={closeCreateModal}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new user
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
                            value={newUser?.first_name}
                            onChange={(e) => setNewUser({...newUser, first_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser?.last_name}
                            onChange={(e) => setNewUser({...newUser, last_name: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser.email}
                            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={newUser.gender} onChange={(e) => setNewUser({...newUser, gender: e.target.value})}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="???">The strange thing</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ip address</Form.Label>
                        <Form.Control
                            type="text"
                            value={newUser.ip_address}
                            onChange={(e)=> setNewUser({...newUser, ip_address: e.target.value})}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeCreateModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}