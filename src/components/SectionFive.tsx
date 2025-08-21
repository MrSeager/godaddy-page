import { FC } from 'react';
//Bootstrap
import { Container, Button, Image } from 'react-bootstrap';
//Images
import ImgOne from '../images/pexels-designecologist-1779487.jpg';
import ImgTwo from '../images/pexels-pixabay-38519.jpg';
import ImgThree from '../images/pexels-ebahir-1173285862-29051442.jpg';
import ImgFour from '../images/pexels-thngocbich-1714341.jpg';
import ImgFive from '../images/istockphoto-1061329208-1024x1024.jpg';

interface SecFiveTextProps {
    [key: string]: string,
}

interface SectionFiveProps {
    textProps: SecFiveTextProps,
}

const SectionFive: FC<SectionFiveProps> = ({ textProps}) => {
    return (
        <Container fluid className='bg-light'>
            <Container className='text-center py-5 d-flex flex-column align-items-center'>
                <h2>{textProps.title}</h2>
                <p>{textProps.par}</p>
                <Container className='d-flex gap-3 overflow-auto'>
                    <Image fluid src={ImgOne} alt='image' className='cs-image-h' />
                    <Image fluid src={ImgTwo} alt='image' className='cs-image-h' />
                    <Image fluid src={ImgThree} alt='image' className='cs-image-h' />
                    <Image fluid src={ImgFour} alt='image' className='cs-image-h' />
                    <Image fluid src={ImgFive} alt='image' className='cs-image-h' />
                </Container>
                <Button className='px-4'>{textProps.btn}</Button>
            </Container>
        </Container>
    );
}

export default SectionFive;