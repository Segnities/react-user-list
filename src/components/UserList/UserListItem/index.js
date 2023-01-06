import React from 'react';
import {Accordion, Button} from "react-bootstrap";

import "./index.scss";

const UserListItem = (props) => {
    const {user, deleteUser, theme, modal, setModal, setUser} = props;

    const accordionBodyStyles = `container ${theme === 'dark' ? 'accordion-body-dark' : ''}`;
    const accordionHeaderStyles = `${theme === 'dark' ? 'accordion-header-dark' : ''}`;
    const buttonWarningVariant = `${theme === 'dark' ? 'outline-warning' : 'warning'}`;
    const buttonDangerVariant =  `${theme === 'dark' ? 'outline-danger' : 'danger'}`;

    const onRedactButtonClick = () => {
        setModal({...modal, redact: true})
        setUser(user);
    }

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={"1"} key={props.user.id} className={'border-0'}>
                <Accordion.Header className={accordionHeaderStyles}>{props.user.email}</Accordion.Header>
                <Accordion.Body className={accordionBodyStyles}>
                    <p>First name: {props.user.first_name}</p>
                    <p>Last name: {props.user.last_name}</p>
                    <p>Gender: {props.user.gender}</p>
                    <p>Ip address: {props.user.ip_address}</p>
                    <div className={"d-flex justify-content-end p-2"}>
                        <Button variant={buttonWarningVariant} className={"mx-2"} onClick={onRedactButtonClick}>Redact</Button>
                        <Button variant={buttonDangerVariant} className={"mx-2"} onClick={()=> deleteUser(user)}>Delete</Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default UserListItem;