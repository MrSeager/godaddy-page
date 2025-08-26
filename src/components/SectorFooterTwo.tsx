import { FC } from 'react';
//Bootstrap
import { Container, Image, Dropdown, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
//Images
import LogoImg from '../images/godaddy.svg';
//Icons
import { FaFacebook, FaSquareInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

interface SecFooterTwoTextProps {
    [key: string]: string,
}

interface SectionFooterTwoProps {
    lang: string,
    setLang: (lang: string) => void,
    textProps: SecFooterTwoTextProps,
}

const SectorFooterTwo: FC<SectionFooterTwoProps> = ({ setLang, textProps }) => {
    return (
        <Container fluid className='bg-black'>
            <Container className='border-bottom pb-3'>
                <Row>
                    <Col lg={6} xs={12} className='d-flex gap-3 align-items-center justify-content-lg-start justify-content-center'>
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
                    </Col>
                    <Col lg={6} xs={12} className='d-flex align-items-center justify-content-lg-end justify-content-center'>
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
                    </Col>
                </Row>
            </Container>
            <Container className='py-3 text-white'>
                <Row>
                    <Col lg={10} xs={12} className='d-flex flex-column gap-4'>
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
                    </Col>
                    <Col lg={2} xs={12} className='d-flex flex-column justify-content-between'>
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
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SectorFooterTwo;