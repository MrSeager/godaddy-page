import { FC, useState } from 'react';
//Components
import { useHover, useFade } from './anim.tsx';
//Bootstrap
import { Container, Button, Image } from 'react-bootstrap';
//Images
import ImgOne from '../images/pexels-designecologist-1779487.jpg';
import ImgTwo from '../images/pexels-pixabay-38519.jpg';
import ImgThree from '../images/pexels-ebahir-1173285862-29051442.jpg';
import ImgFour from '../images/pexels-thngocbich-1714341.jpg';
import ImgFive from '../images/istockphoto-1061329208-1024x1024.jpg';
//Intersection Observer
import { useInView } from "react-intersection-observer";
//Spring
import { animated } from '@react-spring/web';

interface SecFiveTextProps {
    [key: string]: string,
}

interface SectionFiveProps {
    textProps: SecFiveTextProps,
}

const SectionFive: FC<SectionFiveProps> = ({ textProps }) => {
    const [hover, setHover] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const hoverAnim = useHover(hover, 1.02);
    const fadeAnim = useFade(inView);

    return (
        <Container fluid className='bg-light mt-5'>
            <animated.div
                ref={ref}
                style={fadeAnim}
                className='container text-center py-5 d-flex flex-column align-items-center'
            >
                <h2>{textProps.title}</h2>
                <p>{textProps.par}</p>
                <animated.div
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    style={hoverAnim}
                    className='d-flex gap-3 overflow-auto cs-scroll'
                >
                    <Image fluid src={ImgOne} alt='image' className='rounded rounded-3 cs-image-h' />
                    <Image fluid src={ImgTwo} alt='image' className='rounded rounded-3 cs-image-h' />
                    <Image fluid src={ImgThree} alt='image' className='rounded rounded-3 cs-image-h' />
                    <Image fluid src={ImgFour} alt='image' className='rounded rounded-3 cs-image-h' />
                    <Image fluid src={ImgFive} alt='image' className='rounded rounded-3 cs-image-h' />
                </animated.div>
                <Button
                    type='button'
                    href='#' 
                    className='mt-3 px-5 py-2 text-nowrap bg-black fw-semibold border-black cs-transition cs-main-btn'>
                        {textProps.btn}
                    </Button>
            </animated.div>
        </Container>
    );
}

export default SectionFive;