import React from 'react';
import {Accordion, Button, ButtonGroup} from "react-bootstrap";

import "./index.scss";

const UserListItem = (props) => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={"1"} key={props.user.id}>
                <Accordion.Header>{props.user.email}</Accordion.Header>
                <Accordion.Body className="container">
                    <p>First name: {props.user.first_name}</p>
                    <p>Last name: {props.user.last_name}</p>
                    <p>Gender: {props.user.gender}</p>
                    <p>Ip address: {props.user.ip_address}</p>
                    <div className={"d-flex justify-content-end"}>
                        <Button variant={"warning"} className={"mx-2"}>Redact</Button>
                        <Button variant={"danger"} className={"mx-2"}>Delete</Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default UserListItem;