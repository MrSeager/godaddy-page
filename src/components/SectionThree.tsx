import { FC } from 'react';
//Bootstrap
import { Container, ButtonGroup, Button } from 'react-bootstrap';

interface SecThreeTextProps {
    [key: string]: string,
}

interface SectionThreeProps {
    textProps: SecThreeTextProps,
}

const SectionThree: FC<SectionThreeProps> = ({ textProps }) => {
    return (
        <Container className='d-flex flex-lg-row flex-column gap-0 px-0 border border-secondary-subtle rounded-1 overflow-hidden'>
            <ButtonGroup vertical className='flex-fill'>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_1_1}</Button>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_1_2}</Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_2_1}</Button>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_2_2}</Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_3_1}</Button>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_3_2}</Button>
            </ButtonGroup>
            <ButtonGroup vertical className='flex-fill'>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_4_1}</Button>
                <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>{textProps.btn_4_2}</Button>
            </ButtonGroup>
            <Button className='p-3 text-secondary rounded-0 bg-transparent border-secondary-subtle cs-transition cs-btn'>
                <span className='fs-2'>.shop</span><br />
                {textProps.btn_5_1}<br />
                {textProps.btn_5_2}
            </Button>
        </Container>
    );
}

export default SectionThree;