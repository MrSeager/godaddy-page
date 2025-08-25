import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav, NavDropdown, Image, Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../images/godaddy.svg';
//Icons
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

interface NavTextProps {
  [key: string]: string,
}

interface GoDaddyNavBarProps {
    textProps: NavTextProps,
}

const GoDaddyNavBar: FC<GoDaddyNavBarProps> = ({ textProps }) => {
    return (
        <Navbar sticky='top' expand='lg' className="bg-white">
            <Container className='px-0'>
                <Navbar.Brand className='cs-w-brend pt-0 me-1'>
                    <Image fluid src={LogoImg} alt='src' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink1}</Nav.Link>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink2}</Nav.Link>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink3}</Nav.Link>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink4}</Nav.Link>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink5}</Nav.Link>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'>{textProps.navLink6}</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto gap-3'>
                        <Nav.Link href='#' className='fw-semibold cs-transition text-secondary cs-nav-btn'>{textProps.navLink7}</Nav.Link>
                        <Dropdown drop='start' >
                            <Dropdown.Toggle className='fw-semibold border-0 bg-transparent pt-2 px-0 cs-transition text-secondary cs-nav-btn'>
                                {textProps.navLink8} <MdKeyboardArrowDown />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Form className='p-2 d-flex flex-column gap-2'>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" className='border-secondary-subtle w-25'>@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className='shadow-none border-secondary-subtle cs-transition cs-fc'
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon2" className='border-secondary-subtle w-25'>#</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon2"
                                        className='shadow-none border-secondary-subtle cs-transition cs-fc'
                                    />
                                </InputGroup>
                                <NavDropdown.Divider />
                                <Container className='d-flex flex-row gap-2'>
                                    <Button type='button' href='#' className='text-nowrap bg-black fw-semibold border-black cs-transition cs-main-btn'>{textProps.navLink8}</Button>
                                    <Button type='button' href='#' className='bg-black fw-semibold border-black cs-transition cs-main-btn'>{textProps.navLink9}</Button>
                                </Container>
                            </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href='#' className='cs-transition text-secondary cs-nav-btn'><FiShoppingCart style={{ strokeWidth: 3 }} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GoDaddyNavBar;