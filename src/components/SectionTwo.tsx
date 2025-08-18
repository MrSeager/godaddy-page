import { FC, useState } from 'react';
//Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//Images
import BGImg from '../images/pexels-karolina-grabowska-5632402.jpg';
//Icons
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface SecTwoTextProps {
    [key: string]: string,
}

interface SectionTwoProps {
    textProps: SecTwoTextProps,
}


const SectionTwo: FC<SectionTwoProps> = ({ textProps }) => {
    return (
        <Container className='px-0'>
            <Row>
            <Col lg={8} xs={12}>
                <Card className='border-0 bg-transparent'>
                    <Card.Img src={BGImg} alt='bg' className='cs-image' />
                    <Card.ImgOverlay className='mx-4 d-flex flex-column justify-content-center gap-0'>
                        <Card.Title className='fs-6 my-0'>{textProps.titleOne}</Card.Title>
                        <Card.Subtitle className='display-2 fw-bold w-75 my-0'>{textProps.titelTwo}</Card.Subtitle>
                        <Card.Text className='m-0'>{textProps.parOne}</Card.Text>
                        <Container className='mt-2 d-flex gap-2 px-0'>
                            <Button>{textProps.btnOne}</Button>
                            <Button>{textProps.btnTwo}</Button>
                        </Container>
                        <Card.Text className='my-0'>{textProps.parTwo}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4} xs={12} className='pt-lg-0 pt-3'>
                <Card className='border-0 cs-bg-one w-100 h-100 d-flex flex-column justify-content-center gap-2 px-3'>
                    <Card.Title className='my-0 fs-6'>{textProps.titleThree}</Card.Title>
                    <Card.Subtitle className='my-0 fs-3'>{textProps.titleFour}</Card.Subtitle>
                    <Card.Text className='my-0'>{textProps.parThree}</Card.Text>
                    <Button className='w-75'>{textProps.btnThree}</Button>
                    <Card.Text className='my-0'>{textProps.parFour}</Card.Text>
                    <Card.Text className='my-0 fs-6'>{textProps.parFive} <AiOutlineQuestionCircle /></Card.Text>
                </Card>
            </Col>
            </Row>
        </Container>
    );
}

export default SectionTwo;