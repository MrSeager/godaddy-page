import { FC, useState } from 'react';
//Components
import './godaddyStyle.css';
import { useSlide, useHover } from './anim.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Button } from 'react-bootstrap';
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecOneTextProps {
    [key: string]: string,
}

interface SectionOneProps {
    textProps: SecOneTextProps,
}

const SectionOne: FC<SectionOneProps> = ({ textProps }) => {
    const [hoverIG, setHoverIG] = useState<boolean>(false);
    const [hoverBG, setHoverBG] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const slideLeft = useSlide(inView, -200, 0);
    const slideRight = useSlide(inView, 200, 0);

    const hoverAnimInputGroup = useHover(hoverIG, 1.03);
    const hoverAnimButtonGroup = useHover(hoverBG, 1.03);

    return (
        <Container ref={ref} className='overflow-hidden d-flex flex-lg-row flex-column gap-2 px-0 mt-3'>
            <animated.div 
                onMouseEnter={() => setHoverIG(true)} 
                onMouseLeave={() => setHoverIG(false)}
                style={{...slideLeft, ...hoverAnimInputGroup}} 
                className='input-group'
            >
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
            </animated.div>
            <animated.div 
                onMouseEnter={() => setHoverBG(true)} 
                onMouseLeave={() => setHoverBG(false)}
                style={{ ...slideRight, ...hoverAnimButtonGroup}} 
                className='btn-group'
            >
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
            </animated.div>
        </Container>
    );
}

export default SectionOne;