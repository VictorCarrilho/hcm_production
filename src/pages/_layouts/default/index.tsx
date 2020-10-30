import React, { useState, useContext } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';


import {
    Container,
    DashBoardWrapper,
    BtnOpenMenu,
    Switch_Custom
} from './style';


import ReactProSideBar from '../../../components/ReactProSideBar';


interface Props {
    toggleTheme(): void;
}

const Dashboard: React.FC<Props> = ({ children, toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [checked, setChecked] = useState(true);

    function toggleSwitch() {
        setChecked(!checked);
        toggleTheme()
    }

    return (
        <Container menuOpen={menuOpen}>
            <DashBoardWrapper>
                <div className="header">
                    <BtnOpenMenu onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
                    </BtnOpenMenu>


                    <Switch_Custom >
                        <label>
                            <input type="checkbox" onClick={toggleSwitch} />
                            <div className="switch">
                                <div></div>
                                <div></div>
                                <span></span>
                            </div>
                        </label>
                    </Switch_Custom>

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
