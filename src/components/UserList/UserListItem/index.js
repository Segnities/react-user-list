import React from 'react';
import {Accordion} from "react-bootstrap";

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
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default UserListItem;