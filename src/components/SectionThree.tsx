import { FC } from 'react';
//Components
import { useScale } from './anim.tsx';
//Bootstrap
import { Container, ButtonGroup, Button } from 'react-bootstrap';
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecThreeTextProps {
    [key: string]: string,
}

interface SectionThreeProps {
    textProps: SecThreeTextProps,
}

const SectionThree: FC<SectionThreeProps> = ({ textProps }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const scaleAnim = useScale(inView);

    return (
        <animated.div ref={ref} style={scaleAnim} className='container d-flex flex-lg-row flex-column gap-0 px-0 border border-secondary-subtle rounded-1'>
            <ButtonGroup vertical className='flex-fill'>
                <Button 
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_1_1}
                </Button>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_1_2}
                </Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_2_1}
                </Button>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_2_2}
                </Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_3_1}
                </Button>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_3_2}
                </Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_4_1}
                </Button>
                <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                    {textProps.btn_4_2}
                </Button>
            </ButtonGroup>
            <Button  
                    type='button'
                    href='#'
                    className='fw-semibold p-4 text-secondary rounded-0 bg-transparent border-secondary cs-transition cs-btn'
                >
                <span className='fs-2 fw-bold'>.shop</span><br />
                {textProps.btn_5_1}<br />
                {textProps.btn_5_2}
            </Button>
        </animated.div>
    );
}

export default SectionThree;