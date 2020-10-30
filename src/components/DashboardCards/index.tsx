import React from 'react';
import { Container } from './style';

import {
    Col,
    Row,
    Image,
    Card
} from 'react-bootstrap';

import img1 from '../../assets/img/img-1.svg';

const DashboardCards = () => {
    return (
        <Container>
            <Row className="">
                <Col xl="6" className="pb-3 mb-3">
                    <Card>
                        <Card.Body>
                            <Row className="row-card-body">
                                <Col xl="7">
                                    <Card.Title>
                                        <b className="title-custom">TOTAL SALES</b>
                                    </Card.Title>

                                    <Card.Text className="d-flex mb-1 flex-row">
                                        <h4 className="mb-0">$64,559.25</h4>

                                        <b className="title-custom b-custom">
                                            33.21% compare to last week
                                                </b>
                                        <hr className="bg-custom" />
                                    </Card.Text>

                                    <Row>
                                        <Col md="6" className="col-center-custom">
                                            <div className="f-s-12 title-custom b-custom">
                                                Total sales order
                                                </div>

                                            <div className="f-s-18 m-b-5 p-b-1 info-card">1,568</div>
                                        </Col>

                                        <Col md="6">
                                            <div className="f-s-12 title-custom b-custom">
                                                Sales per order
                                            </div>
                                            <div className="f-s-18 m-b-5 p-b-1 info-card">
                                                $41.20
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl="5">
                                    <Image src={img1} rounded />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="6" className="pb-3 mb-3 teste">
                    <Row className="teste">
                        <Col sm="6" className="pr-1">
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <b className="title-custom fs-1">TOTAL SALES</b>
                                    </Card.Title>

                                    <Card.Text>
                                        <h4 className="mb-0">$64,559.25</h4>
                                        <b className="title-custom b-custom">
                                            33.21% compare to last week
                                        </b>
                                        <hr className="bg-custom" />
                                    </Card.Text>


                                    <Row className="row-card-body">
                                        <Col md="6" className="col-center-custom pb-3">
                                            <div className="title-custom b-custom">
                                                Total sales
                                                </div>
                                            <div className="f-s-18 m-b-5 p-b-1 info-card">1,568</div>
                                        </Col>

                                        <Col md="6" className="col-center-custom pb-3">
                                            <div className="f-s-12 title-custom b-custom">
                                                Per order
                                            </div>
                                            <div className="f-s-18 m-b-5 p-b-1 info-card">
                                                $41.20
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm="6" className="">

                        </Col>
                    </Row>
                </Col>
            </Row>


        </Container>
    )
}

export default DashboardCards;