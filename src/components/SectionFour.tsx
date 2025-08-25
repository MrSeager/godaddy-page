import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
//Images
import ImgOne from '../images/pexels-karolina-grabowska-5650020.jpg';
import ImgTwo from '../images/pexels-karolina-grabowska-5632379.jpg';
import ImgThree from '../images/pexels-karolina-grabowska-5632382.jpg';

interface SecFourTextProps {
    [key: string]: {
       [key: string]: string,
    },
}

interface SectionFourProps {
    textProps: SecFourTextProps,
}

const SectionFour: FC<SectionFourProps> = ({ textProps }) => {
    return (
        <Container className='px-lg-5 px-0 mt-5'>
            <Row className='mx-lg-5 mx-0'>
                <Col lg={6} xs={12} className='d-flex flex-column gap-5'>
                    <h1 className='fw-bold display-5 w-50 mb-lg-5 mb-0'>{textProps.secSec.titleOne}</h1>
                    <Container className='d-flex flex-column px-0 my-auto'>
                        <Image 
                            src={ImgTwo} 
                            alt='image' 
                            className='rounded rounded-3 mt-lg-5 mt-0'
                        />
                        <p className='mt-5'>02</p>
                        <h2>{textProps.secSec.titleTwo}</h2>
                        <p className='m-0'>{textProps.secSec.parOne}</p>
                        <p className='m-0'>{textProps.secSec.parTwo}</p>
                        <p className='m-0'>{textProps.secSec.parThree}</p>
                        <Container className='px-0 mt-3 d-flex gap-3'>
                            <Button 
                                type='button'
                                href='#'
                                className='px-4 bg-black fw-semibold border-black cs-transition cs-main-btn'
                            >
                                {textProps.secSec.btnOne}
                            </Button>
                            <Button
                                type='button'
                                href='#'
                                className='fw-semibold py-2 text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                            >
                                {textProps.secSec.btnTwo}
                            </Button>
                        </Container>
                    </Container>
                </Col>
                <Col lg={6} xs={12} className='d-flex flex-column gap-5 mt-lg-0 mt-5'>
                    <Container className='d-flex flex-column px-0'>
                        <Image 
                            src={ImgOne} 
                            alt='image' 
                            className='rounded rounded-3'
                        />
                        <p className='mt-5'>01</p>
                        <h2>{textProps.secFir.titleOne}</h2>
                        <p className='m-0'>{textProps.secFir.parOne}</p>
                        <Container className='px-0 mt-3 d-flex gap-3'>
                            <Button 
                                type='button'
                                href='#'
                                className='px-4 bg-black fw-semibold border-black cs-transition cs-main-btn'
                            >
                                {textProps.secFir.btnOne}
                            </Button>
                            <Button
                                type='button'
                                href='#'
                                className='fw-semibold py-2 text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                            >
                                {textProps.secFir.btnTwo}
                            </Button>
                        </Container>
                    </Container>
                    <Container className='d-flex flex-column px-0'>
                        <Image 
                            src={ImgThree} 
                            alt='image' 
                            className='rounded rounded-3'
                        />
                        <p className='mt-5'>03</p>
                        <h2>{textProps.secThr.titleOne}</h2>
                        <p className='m-0'>{textProps.secThr.parOne}</p>
                        <Container className='px-0 mt-3 d-flex gap-3'>
                            <Button 
                                type='button'
                                href='#'
                                className='px-4 bg-black fw-semibold border-black cs-transition cs-main-btn'
                            >
                                {textProps.secThr.btnOne}
                            </Button>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionFour;