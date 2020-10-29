import React from 'react';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import {
    Container,
    ImgLogo,
    ImgUser
} from './style';

import { Link } from 'react-router-dom';
import { FcBusinessman, FcComboChart } from 'react-icons/fc';
import my_img from '../../../assets/users-img/42130424805.jpeg'

interface Props {
    menuOpen: Boolean;
}

const ReactProSideBar: React.FC<Props> = ({ menuOpen }) => {
    return (
        <Container>
            <ProSidebar collapsed={!menuOpen} image="https://demos.creative-tim.com/light-bootstrap-dashboard-pro-react/static/media/full-screen-image-3.ef9c8d65.jpg">
                <SidebarHeader className="sidebar-header">
                    <Link to="/dashboard"><ImgLogo className="sidebar-logo" /></Link>

                    <Menu popperArrow={true} className="sidebar-menu-user">
                        <SubMenu
                            title="Victor Carrilho"
                            className=""
                            icon={<ImgUser src={my_img} />}
                        >
                            <MenuItem icon={<FcBusinessman />}>
                                <Link to="/my-profile">Dados Pessoais</Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>

                </SidebarHeader>

                <Menu popperArrow={true}>
                    <MenuItem
                        icon={<FcComboChart size={23} />}>
                        <Link to="/dashboard">Dashboard</Link></MenuItem>

                    <SubMenu title="Components">
                        <MenuItem >Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </Container >
    )
}

export default ReactProSideBar;