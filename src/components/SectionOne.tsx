import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Button, InputGroup, ButtonGroup } from 'react-bootstrap';

interface SecOneTextProps {
    [key: string]: string,
}

interface SectionOneProps {
    textProps: SecOneTextProps,
}

const SectionOne: FC<SectionOneProps> = ({ textProps }) => {
    return (
        <Container className='d-flex flex-lg-row flex-column gap-2 px-0 mt-3'>
            <InputGroup>
                <Form.Control
                    placeholder={textProps.textOne}
                    className='rounded-0 shadow-none py-2 px-3 border-secondary-subtle cs-transition cs-fc'
                />
                <Button 
                    type='button'
                    href='#' 
                    className='px-3 rounded-0 text-nowrap bg-black fw-semibold border-black cs-transition cs-main-btn'
                >
                    {textProps.buttonOne}
                </Button>
            </InputGroup>
            <ButtonGroup>
                <Button 
                    type='button' 
                    href='#' 
                    className='fw-bold text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                >
                    .online <span className='fw-normal'>$0.99*</span>
                </Button>
                <Button 
                    type='button' 
                    href='#' 
                    className='fw-bold text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                >
                    .net <span className='fw-normal'>$14.99*</span>
                </Button>
                <Button 
                    type='button' 
                    href='#' 
                    className='fw-bold text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                >
                    .inc <span className='fw-normal'>$999.99*</span>
                </Button>
                <Button 
                    type='button' 
                    href='#' 
                    className='fw-bold text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                >
                    .me <span className='fw-normal'>$11.99*</span>
                </Button>
            </ButtonGroup>
        </Container>
    );
}

export default SectionOne;