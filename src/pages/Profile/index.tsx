import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    TabsWrapper,
    TabWrapper,
    FooterWrapper
} from './style';

import {
    Row,
    Breadcrumb,
    Tab, Tabs,
    Col
} from 'react-bootstrap';

import { FcBusinessman, FcComboChart } from 'react-icons/fc';



// Screen Sections\\
import DependentesSection from '../../components/ProfileSections/DependentesSection';
import DadosSection from '../../components/ProfileSections/DadosSection';
import ContactSection from '../../components/ProfileSections/ContactSection';

const Profile: React.FC = () => {
    return (
        <Container>

            <Breadcrumb>
                <Breadcrumb.Item>
                    <FcComboChart />
                    <Link to="/dashboard">Dashboard</Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item active>
                    <FcBusinessman /> Dados Pessoais
                </Breadcrumb.Item>
            </Breadcrumb>

            <TabsWrapper>
                <Tabs defaultActiveKey="dados" className="tabs-wrapper">
                    <Tab eventKey="dados" title="Dados Pessoais">
                        <TabWrapper>
                            <DadosSection />
                        </TabWrapper>
                    </Tab>
                    <Tab eventKey="dependentes" title="Dependentes">
                        <TabWrapper>
                            <DependentesSection />
                        </TabWrapper>
                    </Tab>
                    <Tab eventKey="contact" title="Contatos">
                        <TabWrapper>
                            <ContactSection />
                        </TabWrapper>
                    </Tab>
                </Tabs>
            </TabsWrapper>

            <FooterWrapper>
                <Row>
                    <Col md="12" className="card">
                        Afirmo que os dados informados são verídicos. (Obrigatório)
                    </Col>
                </Row>
            </FooterWrapper>

        </Container >
    )
}

export default Profile;