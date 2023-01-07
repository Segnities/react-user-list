import React, {useState} from 'react';

import {Form, Navbar, Container, Button, OverlayTrigger, Tooltip} from "react-bootstrap";


import {useReziseObserver} from "../../../hooks/useReziseObserver";

import {BsBootstrap} from "@react-icons/all-files/bs/BsBootstrap";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {AiOutlineUserAdd} from "@react-icons/all-files/ai/AiOutlineUserAdd";


import "./index.scss";


const Desktop = (props) => {
    const {filter, setFilter, onChangeLimit} = props;
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
            <Button variant={'outline-light'} className={'px-2'}
                    onClick={() => onChangeLimit(filter.selectLimit)}>Apply</Button>
        </Container>
    )
}

const Header = (props) => {
    const {filter, theme, setFilter, onLogoClick, onChangeLimit, modal,setModal} = props;
    const [animation, setAnimation] = useState(false);
    const clientWidth = useReziseObserver();

    const BsBootstrapIconStyles = `BsBootstrap ${animation ? 'logo-animation-bounce' : 'logo-animation-rubber'}`;

    return (
        <header>
            <Navbar bg={theme} variant="dark" className={"navbar p-3 w-100"}>
                <Container fluid className={'w-100 justify-content-between'}>
                    <Navbar.Brand className={"d-flex align-items-center"}>
                        <BsBootstrap
                            className={BsBootstrapIconStyles}
                            onClick={() => {
                                setAnimation(!animation)
                                onLogoClick()
                            }}/>
                    </Navbar.Brand>
                    <Form className="d-flex justify-content-between align-items-center position-relative md-width-800">
                        <Container className={'d-flex align-items-center position-relative'}>
                            <Form.Control
                                value={filter.query}
                                className={'adjust-search-field'}
                                onChange={(e) => setFilter({...filter, query: e.target.value})}
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="basic-addon2"
                            />
                            <BiSearch className={'position-absolute BiSearch'}/>
                            <AiOutlineUserAdd className={'position-absolute AiOutlineUserAdd'} onClick={()=> setModal({...modal, create: true})}/>
                        </Container>
                        {
                            clientWidth > 480 &&
                            <Desktop filter={filter} setFilter={setFilter} onChangeLimit={onChangeLimit}/>
                        }
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;