import React from 'react';
import { Container } from './style';

import {
    Col,
    Row
} from 'react-bootstrap';

import img1 from '../../assets/img/img-1.svg';

const DashboardCards = () => {
    return (
        <Container>
            <Row>
                <Col xl="6" className="col-md-6-custom pr-1">
                    <div className="card">
                        <div className="card-body">
                            <Row>
                                <Col xl="7">
                                    <div className="mb-3">
                                        <b className="title-custom">TOTAL SALES</b>
                                    </div>

                                    <div className="d-flex mb-1 flex-row">
                                        <h4 className="mb-0">$64,559.25</h4>
                                        <div className="mb-3">
                                            <b className="title-custom b-custom">
                                                33.21% compare to last week
                                                </b>
                                        </div>
                                    </div>

                                    <hr className="bg-custom" />

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
                                    <img src={img1} alt="" height="150px" className="d-none d-lg-block" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col md="6" className="col-md-6-custom">
                    <Row>
                        <Col sm="6" className="pr-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <b className="title-custom">TOTAL SALES</b>
                                    </div>

                                    <div className="d-flex mb-1 flex-row">
                                        <h4 className="mb-0">$64,559.25</h4>
                                        <div className="mb-3">
                                            <b className="title-custom b-custom">
                                                33.21% compare to last week
                                                </b>
                                        </div>
                                    </div>
                                    <hr className="bg-custom" />
                                    <Row>
                                        <Col md="6" className="col-center-custom">
                                            <div className="f-s-12 title-custom b-custom">
                                                Total order
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

                                </div>
                            </div>
                        </Col>

                        <Col sm="6" className="pl-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <b className="title-custom">TOTAL SALES</b>
                                    </div>

                                    <div className="d-flex mb-1 flex-row">
                                        <h4 className="mb-0">$64,559.25</h4>
                                        <div className="mb-3">
                                            <b className="title-custom b-custom">
                                                33.21% compare to last week
                                                </b>
                                        </div>
                                    </div>
                                    <hr className="bg-custom" />
                                    <Row>
                                        <Col md="6" className="col-center-custom">
                                            <div className="f-s-12 title-custom b-custom">
                                                Total order
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


                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Container>
    )
}

export default DashboardCards;