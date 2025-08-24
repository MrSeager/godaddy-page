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
                            <Dropdown.Toggle className='border-0 bg-transparent'>
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
                            <Button><FaFacebook /></Button>
                            <Button><FaSquareInstagram /></Button>
                            <Button><FaTwitter /></Button>
                            <Button><FaYoutube /></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
            <Container className='py-3 text-white'>
                <Row>
                    <Col lg={9} xs={12} className='d-flex flex-column gap-4'>
                        <p className='cs-fs-footer-btn'>{textProps.parOne}</p>
                        <p className='cs-fs-footer-btn'>{textProps.parTwo} <span className='text-info'>{textProps.parLink}</span>.</p>
                    </Col>
                    <Col lg={3} xs={12} className='d-flex flex-column justify-content-between'>
                        <ButtonGroup>
                            <Button className='cs-fs-footer-btn'>{textProps.btnOne}</Button>
                            <Button className='cs-fs-footer-btn'>{textProps.btnTwo}</Button>
                            <Button className='cs-fs-footer-btn'>{textProps.btnThree}</Button>
                        </ButtonGroup>
                        <p className='cs-fs-footer-btn'>{textProps.parThree}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SectorFooterTwo;