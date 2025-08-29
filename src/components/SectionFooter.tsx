import { FC } from 'react';
//Components
import { useSlideTilt } from './anim.tsx';
//Bootstrap
import { Container, Row, Button, ButtonGroup } from 'react-bootstrap';
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecFooterTextProps {
    title_1: string;
    buttons_1: string[];
    title_2: string;
    buttons_2: string[];
    title_3: string;
    buttons_3: string[];
    title_4: string;
    buttons_4: string[];
    title_5: string;
    buttons_5: string[];
    title_6: string;
    buttons_6: string[];
}

interface SectionFooterProps {
    textProps: SecFooterTextProps,
}

const SectionFooter: FC<SectionFooterProps> = ({ textProps }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const slideTiltAnim0 = useSlideTilt( inView, -200, -100, 0);
    const slideTiltAnim1 = useSlideTilt( inView, -200, -100, 50);
    const slideTiltAnim2 = useSlideTilt( inView, -200, -100, 100);
    const slideTiltAnim3 = useSlideTilt( inView, -200, -100, 150);
    const slideTiltAnim4 = useSlideTilt( inView, -200, -100, 200);
    const slideTiltAnim5 = useSlideTilt( inView, -200, -100, 250);

    return (
        <Container ref={ref} fluid className='bg-black text-white py-5'>
            <Container>
                <Row>
                    <animated.div 
                        style={slideTiltAnim0}
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_1}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_1.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </animated.div>
                    <animated.div
                        style={slideTiltAnim1} 
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_2}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_2.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup>                    
                    </animated.div>
                    <animated.div
                        style={slideTiltAnim2} 
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_3}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_3.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup> 
                    </animated.div>
                    <animated.div
                        style={slideTiltAnim3} 
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_4}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_4.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup> 
                    </animated.div>
                    <animated.div
                        style={slideTiltAnim4} 
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_5}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_5.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup> 
                    </animated.div>
                    <animated.div
                        style={slideTiltAnim5} 
                        className='col-lg-2 col-12'
                    >
                        <h4 className='h6'>{textProps.title_6}</h4>
                        <ButtonGroup vertical>
                            {textProps.buttons_6.map((label, index) => (
                                <Button
                                    type='button'
                                    href='#'
                                    key={index}
                                    className='cs-fs-footer-btn text-white-50 px-0 text-start bg-transparent border-0 text-nowrap cs-transition cs-footer-link'
                                >
                                    {label}
                                </Button>
                            ))}
                        </ButtonGroup> 
                    </animated.div>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionFooter;