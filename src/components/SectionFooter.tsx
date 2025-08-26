import { FC } from 'react';
//Bootstrap
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

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
    return (
        <Container fluid className='bg-black text-white py-5'>
            <Container>
                <Row>
                    <Col lg={2} xs={12}>
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
                    </Col>
                    <Col lg={2} xs={12}>
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
                    </Col>
                    <Col lg={2} xs={12}>
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
                    </Col>
                    <Col lg={2} xs={12}>
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
                    </Col>
                    <Col lg={2} xs={12}>
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
                    </Col>
                    <Col lg={2} xs={12}>
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
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SectionFooter;