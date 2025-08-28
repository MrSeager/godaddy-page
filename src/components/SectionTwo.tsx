import { FC, useState } from 'react';
//Components
import { useHover, useSlide } from './anim.tsx';
//Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//Images
import BGImg from '../images/pexels-karolina-grabowska-5632402.jpg';
//Icons
import { AiOutlineQuestionCircle } from "react-icons/ai";
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecTwoTextProps {
    [key: string]: string,
}

interface SectionTwoProps {
    textProps: SecTwoTextProps,
}


const SectionTwo: FC<SectionTwoProps> = ({ textProps }) => {
    const [hoverLeft, setHoverLeft] = useState<boolean>(false);
    const [hoverRight, setHoverRight] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const hoverAnimLeft = useHover(hoverLeft, 1.01);
    const hoverAnimRight = useHover(hoverRight, 1.01);

    const slideLeft = useSlide(inView, -200, 0);
    const slideRight = useSlide(inView, 200, 0);

    return (
        <Container ref={ref} className='px-0 my-2'>
            <Row>
                <animated.div
                    onMouseEnter={() => setHoverLeft(true)}
                    onMouseLeave={() => setHoverLeft(false)}
                    style={{...hoverAnimLeft, ...slideLeft}} 
                    className='col-lg-8 col-12'
                >
                    <Card className='border-0 bg-transparent'>
                        <Card.Img src={BGImg} alt='bg' className='cs-image' />
                        <Card.ImgOverlay className='mx-lg-5 mx-1 d-flex flex-column justify-content-center gap-0'>
                            <Card.Title className='fs-6 my-0'>{textProps.titleOne}</Card.Title>
                            <Card.Subtitle className='display-2 fw-bold my-0'>{textProps.titelTwo}</Card.Subtitle>
                            <Card.Text className='m-0'>{textProps.parOne}</Card.Text>
                            <Container className='mt-2 d-flex gap-2 px-0'>
                                <Button 
                                    type='button'
                                    href='#'
                                    className='px-5 py-2 text-nowrap bg-black fw-semibold border-black cs-transition cs-main-btn' 
                                >
                                    {textProps.btnOne}
                                </Button>
                                <Button
                                    type='button'
                                    href='#'
                                    className='fw-semibold py-2 text-nowrap border-0 bg-transparent text-secondary cs-transition cs-nav-btn'
                                >
                                    {textProps.btnTwo}
                                </Button>
                            </Container>
                            <Card.Text className='my-0'>{textProps.parTwo}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </animated.div>
                <animated.div
                    onMouseEnter={() => setHoverRight(true)}
                    onMouseLeave={() => setHoverRight(false)}
                    style={{...hoverAnimRight, ...slideRight}} 
                    className='col-lg-4 col-12 pt-lg-0 pt-3'
                >
                    <Card className='border-0 py-5 px-lg-5 px-1 cs-bg-one w-100 h-100 d-flex flex-column align-items-start justify-content-center gap-2 px-3'>
                        <Card.Title className='my-0 fs-6'>{textProps.titleThree}</Card.Title>
                        <Card.Subtitle className='my-0 fs-3'>{textProps.titleFour}</Card.Subtitle>
                        <Card.Text className='my-0'>{textProps.parThree}</Card.Text>
                        <Button 
                            type='button'
                            href='#'
                            className='px-5 py-2 text-nowrap bg-black fw-semibold border-black cs-transition cs-main-btn'
                        >
                            {textProps.btnThree}
                        </Button>
                        <Card.Text className='my-0'>{textProps.parFour}</Card.Text>
                        <Card.Text className='my-0 fs-6'>{textProps.parFive} <AiOutlineQuestionCircle /></Card.Text>
                    </Card>
                </animated.div>
            </Row>
        </Container>
    );
}

export default SectionTwo;