import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import GoDaddyNavBar from './GoDaddyNavBar.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

interface SecOneTextProps {
    [key: string]: string,
}

interface SectionOneProps {
    textProps: SecOneTextProps,
}

const SectionOne: FC<SectionOneProps> = ({ textProps }) => {
    return (
        <Container className='d-flex flex-row gap-2 px-0 mt-3'>
            <InputGroup>
                <Form.Control
                    placeholder={textProps.textOne}
                    className='rounded-0'
                />
                <Button 
                    type='button'
                    className='rounded-0'
                >
                    {textProps.buttonOne}
                </Button>
            </InputGroup>
            <Button type='button' className='fw-bold text-nowrap border-0 bg-transparent text-secondary'>
                .online <span className='fw-normal'>$0.99*</span>
            </Button>
            <Button type='button' className='fw-bold text-nowrap border-0 bg-transparent text-secondary'>
                .net <span className='fw-normal'>$14.99*</span>
            </Button>
            <Button type='button' className='fw-bold text-nowrap border-0 bg-transparent text-secondary'>
                .inc <span className='fw-normal'>$999.99*</span>
            </Button>
            <Button type='button' className='fw-bold text-nowrap border-0 bg-transparent text-secondary'>
                .me <span className='fw-normal'>$11.99*</span>
            </Button>
        </Container>
    );
}

export default SectionOne;