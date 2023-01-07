import React, {useState} from 'react';

import {Form, Navbar, Container} from "react-bootstrap";

import Filter from "../Filter";

import {useReziseObserver} from "../../../hooks/useReziseObserver";

import {BsBootstrap} from "@react-icons/all-files/bs/BsBootstrap";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {AiOutlineUserAdd} from "@react-icons/all-files/ai/AiOutlineUserAdd";


import "./index.scss";


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
                            <Filter filter={filter} setFilter={setFilter} onChangeLimit={onChangeLimit}/>
                        }
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;