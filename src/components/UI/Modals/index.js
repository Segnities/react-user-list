import React, { useState } from "react";

import { Modal, Form, Button, ButtonGroup } from "react-bootstrap";

import { nanoid } from "nanoid";

export const RedactModal = (props) => {
  const { modal, setModal, user, setUser, redactUser } = props;
  const [validated, setValidation] = useState(false);

  const closeRedactModal = () => {
    setModal({ ...modal, redact: false });
  };

  const saveChanges = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidation(true);
    setModal({ ...modal, redact: false });
    redactUser(user);
  };

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
        <Form validated={validated} onSubmit={saveChanges}>
          <Form.Group className="mb-3" controlId="Form.firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              autoFocus
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid email!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="???">The strange thing</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ip address</Form.Label>
            <Form.Control
              required
              type="text"
              value={user.ip_address}
              onChange={(e) => setUser({ ...user, ip_address: e.target.value })}
            />
          </Form.Group>
          <ButtonGroup className="float-end">
            <Button variant="success" type="submit" className={"mx-1"}>
              Save Changes
            </Button>
            <Button
              variant="danger"
              onClick={closeRedactModal}
              className={"mx-1"}
            >
              Close
            </Button>
          </ButtonGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export const CreateModal = (props) => {
  const { modal, setModal, createUser } = props;
  const [newUser, setNewUser] = useState({
    id: nanoid(),
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });
  const [validated, setValidation] = useState(false);
  const closeCreateModal = () => {
    setModal({ ...modal, create: false });
  };

  const saveChanges = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidation(true);
    setModal({ ...modal, create: false });
    createUser(newUser);
  };

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
        <Form validated={validated} onSubmit={saveChanges}>
          <Form.Group className="mb-3" controlId="Form.firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              autoFocus
              value={newUser?.first_name}
              onChange={(e) =>
                setNewUser({ ...newUser, first_name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={newUser?.last_name}
              onChange={(e) =>
                setNewUser({ ...newUser, last_name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="text"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              value={newUser.gender}
              onChange={(e) =>
                setNewUser({ ...newUser, gender: e.target.value })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="???">The strange thing</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ip address</Form.Label>
            <Form.Control
              required
              type="text"
              value={newUser.ip_address}
              onChange={(e) =>
                setNewUser({ ...newUser, ip_address: e.target.value })
              }
            />
          </Form.Group>
          <ButtonGroup className="float-end">
            <Button variant="success" type="submit" className={"mx-1"}>
              Save Changes
            </Button>
            <Button variant="danger" className={"mx-1"}>
              Close
            </Button>
          </ButtonGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
