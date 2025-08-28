import { FC, useState } from 'react';
//Components
import { useSlide, useHover } from './anim.tsx';
//Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
//Images
import ImgOne from '../images/pexels-karolina-grabowska-5650020.jpg';
import ImgTwo from '../images/pexels-karolina-grabowska-5632379.jpg';
import ImgThree from '../images/pexels-karolina-grabowska-5632382.jpg';
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecFourTextProps {
    [key: string]: {
       [key: string]: string,
    },
}

interface SectionFourProps {
    textProps: SecFourTextProps,
}

const SectionFour: FC<SectionFourProps> = ({ textProps }) => {
    const [hover, setHover] = useState<boolean[]>([false, false, false, false ]);
    const { ref: ref0, inView: inView0 } = useInView({ threshold: 0 });
    const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
    const { ref: ref2, inView: inView2 } = useInView({ threshold: 0 });
    const { ref: ref3, inView: inView3 } = useInView({ threshold: 0 });


    const updateHover = (index: number, value: boolean) => {
        setHover(prev => {
            const newHover = [...prev];
            newHover[index] = value;
            return newHover;
        });
    };

    const hoverAnim0 = useHover(hover[0], 1.05);
    const hoverAnim1 = useHover(hover[1], 1.03);
    const hoverAnim2 = useHover(hover[2], 1.03);
    const hoverAnim3 = useHover(hover[3], 1.03);

    const slideAnim0 = useSlide(inView0, -200);
    const slideAnim1 = useSlide(inView1, -200);
    const slideAnim2 = useSlide(inView2, 200);
    const slideAnim3 = useSlide(inView3, 200);


    return (
        <Container className='px-lg-5 px-0 mt-5'>
            <Row className='mx-lg-5 mx-0'>
                <Col lg={6} xs={12} className='d-flex flex-column gap-5'>
                    <animated.div
                        ref={ref0}
                        onMouseEnter={() => updateHover(0, true)}
                        onMouseLeave={() => updateHover(0, false)}
                        style={{...hoverAnim0, ...slideAnim0}}
                    >
                        <h1 className='fw-bold display-5 w-50 mb-lg-5 mb-0'>{textProps.secSec.titleOne}</h1>
                    </animated.div>
                    <animated.div
                        ref={ref1}
                        onMouseEnter={() => updateHover(1, true)}
                        onMouseLeave={() => updateHover(1, false)}
                        style={{...hoverAnim1, ...slideAnim1}} 
                        className='container d-flex flex-column px-0 my-auto'
                    >
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
                    </animated.div>
                </Col>
                <Col lg={6} xs={12} className='d-flex flex-column gap-5 mt-lg-0 mt-5'>
                    <animated.div
                        ref={ref2}
                        onMouseEnter={() => updateHover(2, true)}
                        onMouseLeave={() => updateHover(2, false)}
                        style={{...hoverAnim2, ...slideAnim2}} 
                        className='container d-flex flex-column px-0'
                    >
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
                    </animated.div>
                    <animated.div
                        ref={ref3}
                        onMouseEnter={() => updateHover(3, true)}
                        onMouseLeave={() => updateHover(3, false)}
                        style={{...hoverAnim3, ...slideAnim3}} 
                        className='d-flex flex-column px-0'
                    >
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
                    </animated.div>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionFour;