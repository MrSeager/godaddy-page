import { FC, useState } from 'react';
//Components
import { useSlide } from './anim.tsx';
//Bootstrap
import { Container, Row, Col, Button, Image, InputGroup, Form } from 'react-bootstrap';
//Images
import LogoImg from '../images/godaddy.svg';
//Icons
import { HiArrowNarrowRight } from "react-icons/hi";
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecSixTextProps {
    [key: string]: string,
}

interface SectionSixProps {
    textProps: SecSixTextProps,
}

const SectionSix: FC<SectionSixProps> = ({ textProps }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const slideLeft = useSlide(inView, -200, 0);
    const slideRight = useSlide(inView, 200, 100);

    return (
        <Container fluid className='bg-black border-bottom text-white'>
            <Container ref={ref} className='py-4'>
                <Row>
                    <animated.div 
                        style={slideLeft}
                        className='col-lg-6 col-12 d-flex flex-column gap-3 pe-lg-3 pe-0'
                    >
                        <h3 className='h4 fw-bold'>{textProps.titleOne}</h3>
                        <InputGroup>
                            <Form.Control
                                placeholder={textProps.par}
                                className='rounded-0 py-2 shadow-none bg-dark border-dark text-white cs-transition cs-fc-footer'
                            />
                            <Button 
                                type='button'
                                href='#'
                                className='rounded-0 px-4 text-black text-nowrap bg-white fw-semibold border-white cs-transition cs-footer-btn'
                            >
                                {textProps.btn}
                            </Button>
                        </InputGroup>
                    </animated.div>
                    <animated.div 
                        style={slideRight} 
                        className='col-lg-6 col-12 mt-lg-0 mt-3 ps-lg-3 ps-0 d-flex flex-column gap-2'
                    >
                        <h3 className='h5 m-0 p-0'>{textProps.titleTwo}</h3>
                        <Button
                            type='button'
                            href='#' 
                            className='px-0 border-0 bg-transparent d-flex align-items-center gap-3 fs-3 cs-transition cs-footer-btn-2'
                        >
                            <Image fluid src={LogoImg} alt='logo' className='cs-image-h-sec cs-transition cs-img' />
                            {textProps.titleThree}
                            <HiArrowNarrowRight size={70} />
                        </Button>
                    </animated.div>
                </Row>
            </Container>
        </Container>
    );
}

export default SectionSix;