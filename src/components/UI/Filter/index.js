import React from 'react';
import {Button, Container, Form, OverlayTrigger, Tooltip} from "react-bootstrap";

import {useReziseObserver} from "../../../hooks/useReziseObserver";

const Filter = (props) => {
    const {filter, setFilter, onChangeLimit} = props;
    const clientWidth = useReziseObserver();

    return (
        <Container className={'d-flex'}>
            <OverlayTrigger placement={'bottom'}
                            overlay={<Tooltip id={'tooltip-select-query-bottom'}><strong>Select type of search.</strong></Tooltip>}>
                <Form.Select value={filter.selectQuery}
                             onChange={(e) => setFilter({...filter, selectQuery: e.target.value})}>
                    <option value="first_name">First name</option>
                    <option value="last_name">Last name</option>
                    <option value="email">Email</option>
                    <option value="ip_address">Ip address</option>
                </Form.Select>
            </OverlayTrigger>
            <OverlayTrigger placement={'bottom'}
                            overlay={<Tooltip id={`tooltip-select-limit-bottom`}>Select count of displayed
                                users. <strong>Select value and click apply button</strong></Tooltip>}>
                <Form.Select className={'mx-3'} value={filter.selectLimit} onChange={(e) => {
                    setFilter({...filter, selectLimit: e.target.value})
                }}>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="all">All</option>
                </Form.Select>
            </OverlayTrigger>
            <Button variant={`${clientWidth < 480 ? "primary" : "outline-light"}`} className={'px-2'}
                    onClick={() => onChangeLimit(filter.selectLimit)}>Apply</Button>
        </Container>
    )
};

export default Filter;