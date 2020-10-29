import React from 'react';

import {
    Row,
    Col,
    Form,
    Card
} from 'react-bootstrap';

import { 
    Container
} from './style';

import { HiOutlineMailOpen } from 'react-icons/hi';
import my_img from '../../../../assets/users-img/42130424805.jpeg';


const DadosSection: React.FC = () => {
    return (
        <Container>
            <Row className="row-1">
                <Col md="8" className="card card-1">
                    <Form>
                        <Form.Row className="form-row">
                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Nome</Form.Label>
                                <div className="span-user-card">
                                    <span>Victor Carrilho</span>
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Data de Nacimento</Form.Label>
                                <div className="span-user-card">
                                    <span>29/11/1993</span>
                                </div>
                            </Form.Group>
                            <div className="span-user-card only-span">
                                <HiOutlineMailOpen /> <span>victorcarrilho@gmail.com</span>
                            </div>
                        </Form.Row>
                        <Form.Row className="form-row">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Estado Civil</Form.Label>
                                <div className="span-user-card">
                                    <span>Solteiro</span>
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Nacionalidade</Form.Label>
                                <div className="span-user-card">
                                    <span>Brasileiro</span>
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Naturalidade</Form.Label>
                                <div className="span-user-card">
                                    <span>São Paulo</span>
                                </div>
                            </Form.Group>


                        </Form.Row>
                        <Form.Row className="form-row">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Raça e Cor</Form.Label>
                                <div className="span-user-card">
                                    <span>Branca</span>
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label className="form-label-user">Escolaridade</Form.Label>
                                <div className="span-user-card">
                                    <span>Ensino Médio completo
                                        
                                    </span>
                                </div>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>

                <Col md={true} className="card card-user">
                    <Card>
                    <div className="card-user-img">
                        <Card.Img
                            variant="top"
                            src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" />
                    </div>
                    <Card.Body className="card-user-body">
                        <Card.Title className="card-user-title">
                            <img src={my_img} alt="" />
                            <h4>Victor Carrilho</h4>
                        </Card.Title>
                        <Card.Text>
                            "Uma descrição qualquer sobre o colaborador" <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DadosSection;