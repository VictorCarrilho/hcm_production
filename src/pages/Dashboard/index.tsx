import React from 'react';

import {
    Container,
    MainWrapper
} from './style';

import {
    FcComboChart
} from 'react-icons/fc';

import {
    Breadcrumb
} from 'react-bootstrap';

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
                Atalhos
            </MainWrapper>
        </Container>
    )
}

export default Dashboard;
