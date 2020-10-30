import React from 'react';

import {
    Container,
    MainWrapper
} from './style';

import {
    FcComboChart
} from 'react-icons/fc';

import {
    Breadcrumb,
    Col,
    Row
} from 'react-bootstrap';

import DashboardCards from '../../components/DashboardCards';

const Dashboard = () => {
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item active>
                    <FcComboChart />
                    Dashboard
                </Breadcrumb.Item>
            </Breadcrumb>

            <MainWrapper className="card">
                <DashboardCards />
            </MainWrapper>
        </Container>
    )
}

export default Dashboard;
