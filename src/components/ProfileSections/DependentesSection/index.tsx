import React from 'react';

import {
    Row,
    Col,
    Accordion,
    Card,
    Badge
} from 'react-bootstrap';

import {
    Container,
    AccordionDadosDep,
    AccordionTipoDep
} from './style';

import { FaUserEdit } from 'react-icons/fa';


const DependentesSection = () => {
    return (
        <Container>
            <Row className="card">
                <Col md="12" className="row-1-dependentes">
                    <Accordion className="accordion-custom">
                        <div className="accordion-custom">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-header">
                                <AccordionDadosDep>
                                    <h5>Liz Carrilho</h5>
                                    <span>Feminino, Outros, Nascido em 20/03/2019</span>
                                    <span><b>Este dependente é considerado para o calculo de <Badge variant="warning">IRRF</Badge></b></span>
                                </AccordionDadosDep>

                                <AccordionTipoDep>
                                    Filho(a)
                                </AccordionTipoDep>

                                <div className="accordion-button-custom">
                                    <div><FaUserEdit /> Editar</div>
                                </div>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="accordion-body-custom">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </div>
                        <div className="accordion-custom">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion-header">
                                <AccordionDadosDep>
                                    <h5>Liz Carrilho</h5>
                                    <span>Feminino, Outros, Nascido em 20/03/2019</span>
                                </AccordionDadosDep>

                                <AccordionTipoDep>
                                    Filho(a)
                                </AccordionTipoDep>

                                <div className="accordion-button-custom">
                                    <div><FaUserEdit /> Editar</div>
                                </div>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1" className="accordion-body-custom">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </div>

                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default DependentesSection;