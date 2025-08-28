import { FC, useState } from 'react';
//Components
import { useSlide } from './anim.tsx';
//Bootstrap
import { Container, Image, Dropdown, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
//Images
import LogoImg from '../images/godaddy.svg';
//Icons
import { FaFacebook, FaSquareInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecFooterTwoTextProps {
    [key: string]: string,
}

interface SectionFooterTwoProps {
    lang: string,
    setLang: (lang: string) => void,
    textProps: SecFooterTwoTextProps,
}

const SectorFooterTwo: FC<SectionFooterTwoProps> = ({ setLang, textProps }) => {
    const { ref: ref0, inView: inView0 } = useInView({ threshold: 0, });
    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0, });
    
    const slideLeft0 = useSlide(inView0, -200);
    const slideRigt0 = useSlide(inView0, 200);
    const slideLeft1 = useSlide(inView1, -200);
    const slideRigt1 = useSlide(inView1, 200);

    return (
        <Container fluid className='bg-black'>
            <Container ref={ref0} className='border-bottom pb-3'>
                <Row>
                    <animated.div 
                        style={slideLeft0} 
                        className='col-lg-6 col-12 d-flex gap-3 align-items-center justify-content-lg-start justify-content-center'
                    >
                        <Image fluid src={LogoImg} alt='logo' className='cs-image-h-two-sec cs-img' />
                        <Dropdown drop='up-centered'>
                            <Dropdown.Toggle className='border-0 bg-transparent cs-transition cs-footer-btn-2'>
                                {textProps.btnLang}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setLang('en')}>
                                    United States - English
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setLang('ua')}>
                                    Україна - Українська
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </animated.div>
                    <animated.div 
                        style={slideRigt0} 
                        className='col-lg-6 col-12 d-flex align-items-center justify-content-lg-end justify-content-center'
                    >
                        <ButtonGroup size="lg">
                            <Button
                                type='button'
                                href='#' 
                                className='px-1 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                    <FaFacebook size={30} />
                            </Button>
                            <Button
                                type='button'
                                href='#' 
                                className='px-1 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                <FaSquareInstagram size={30} />
                            </Button>
                            <Button
                                type='button'
                                href='#' 
                                className='px-1 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                <FaTwitter size={30} />
                            </Button>
                            <Button
                                type='button'
                                href='#' 
                                className='px-1 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                <FaYoutube size={30} />
                            </Button>
                        </ButtonGroup>
                    </animated.div>
                </Row>
            </Container>
            <Container ref={ref1} className='py-3 text-white'>
                <Row>
                    <animated.div
                        style={slideLeft1}
                        className='col-lg-10 col-12 d-flex flex-column gap-4'
                    >
                        <p className='cs-fs-footer-btn text-lg-start text-center'>{textProps.parOne}</p>
                        <p className='cs-fs-footer-btn text-lg-start text-center'>
                            {textProps.parTwo} 
                            <Button 
                                type='button' 
                                href='#' 
                                className='cs-fs-footer-btn ps-1 pe-0 py-0 mb-1 border-0 bg-transparent text-info text-decoration-none cs-transition cs-footer-link'
                            >
                                {textProps.parLink}
                            </Button>
                            .
                        </p>
                    </animated.div>
                    <animated.div 
                        style={slideRigt1} 
                        className='col-lg-2 col-12 d-flex flex-column justify-content-between'
                    >
                        <ButtonGroup>
                            <Button 
                                type='button'
                                href='#'
                                className='cs-fs-footer-btn px-1 py-0 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                {textProps.btnOne}
                            </Button>
                            <Button  
                                type='button'
                                href='#'
                                className='cs-fs-footer-btn px-1 py-0 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                {textProps.btnTwo}
                            </Button>
                            <Button  
                                type='button'
                                href='#'
                                className='cs-fs-footer-btn px-1 py-0 border-0 bg-transparent cs-transition cs-footer-btn-2'
                            >
                                {textProps.btnThree}
                            </Button>
                        </ButtonGroup>
                        <p className='cs-fs-footer-btn mt-lg-0 mt-3 text-lg-start text-center'>{textProps.parThree}</p>
                    </animated.div>
                </Row>
            </Container>
        </Container>
    );
}

export default SectorFooterTwo;