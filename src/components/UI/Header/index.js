import React, {useState} from 'react';
import {Form, Navbar, Container, Button, OverlayTrigger, Tooltip} from "react-bootstrap";

import {BsBootstrap} from "@react-icons/all-files/bs/BsBootstrap";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {GiHamburger} from "@react-icons/all-files/gi/GiHamburger";

import "./index.scss";
import {useReziseObserver} from "../../../hooks/useReziseObserver";

const Desktop = (props) => {
    return (
        <Container className={'d-flex'}>
            <OverlayTrigger placement={'bottom'}
                            overlay={<Tooltip id={`tooltip-select-bottom`}>Select count of displayed
                                users. <strong>Select item and click apply</strong></Tooltip>}>
                <Form.Select className={'mx-3'}>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="all">All</option>
                </Form.Select>
            </OverlayTrigger>
            <Button variant={'outline-light'}>Apply</Button>
        </Container>
    )
}

const Header = (props) => {
    const {filter, theme, setFilter, onLogoClick} = props;
    const [animation, setAnimation] = useState(false);
    const clientWidth = useReziseObserver();

    return (
        <header>
            <Navbar bg={theme} variant="dark" className={"navbar p-3 w-100"}>
                <Container fluid className={'w-100 justify-content-between'}>
                    <Navbar.Brand className={"d-flex align-items-center"}>
                        <BsBootstrap
                            className={`BsBootstrap ${animation ? 'logo-animation-bounce' : 'logo-animation-rubber'}`}
                            onClick={() => {
                                setAnimation(!animation)
                                onLogoClick()
                            }}/>
                    </Navbar.Brand>
                    <Form className="d-flex justify-content-between align-items-center position-relative">
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
                        </Container>
                        {
                            clientWidth > 480 && <Desktop/>
                        }
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;