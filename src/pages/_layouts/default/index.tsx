import React, { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

import {
    Container,
    DashBoardWrapper,
    BtnOpenMenu
} from './style';

import ReactProSideBar from '../../../components/ReactProSideBar';

const Dashboard: React.FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <Container menuOpen={menuOpen}>

            <DashBoardWrapper>
                <div className="header">
                    <BtnOpenMenu onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineDoubleLeft color='#000' /> : <AiOutlineDoubleRight color='#000' />}
                    </BtnOpenMenu>
                </div>

                <div className="dashboard-container">
                    {children}
                </div>
            </DashBoardWrapper>

            <ReactProSideBar menuOpen={menuOpen} />
        </Container>
    )
}

export default Dashboard;
