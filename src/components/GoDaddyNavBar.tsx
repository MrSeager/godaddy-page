import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, NavDropdown, Image, Form, InputGroup, Button } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../images/godaddy.svg';
//Icons
import { SlBasket } from "react-icons/sl";

interface NavTextProps {
  [key: string]: string,
}

interface GoDaddyNavBarProps {
    textProps: NavTextProps,
}

const GoDaddyNavBar: FC<GoDaddyNavBarProps> = ({ textProps }) => {
    return (
        <Navbar sticky='top' expand='lg' className="bg-transparent">
            <Container className='px-0'>
                <Navbar.Brand className='cs-w-brend pt-0 me-1'>
                    <Image fluid src={LogoImg} alt='src' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#'>{textProps.navLink1}</Nav.Link>
                        <Nav.Link href='#'>{textProps.navLink2}</Nav.Link>
                        <Nav.Link href='#'>{textProps.navLink3}</Nav.Link>
                        <Nav.Link href='#'>{textProps.navLink4}</Nav.Link>
                        <Nav.Link href='#'>{textProps.navLink5}</Nav.Link>
                        <Nav.Link href='#'>{textProps.navLink6}</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#'>{textProps.navLink7}</Nav.Link>
                        <NavDropdown drop='start' title={textProps.navLink8} id="basic-nav-dropdown">
                            <Form className='p-2 d-flex flex-column gap-2'>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" className='w-25'>@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon2" className='w-25'>#</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                                <NavDropdown.Divider />
                                <Container className='d-flex flex-row gap-2'>
                                    <Button className='text-nowrap'>{textProps.navLink8}</Button>
                                    <Button>{textProps.navLink9}</Button>
                                </Container>
                            </Form>
                        </NavDropdown>
                        <Nav.Link href='#'><SlBasket /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GoDaddyNavBar;