import styled from 'styled-components';

export const Container = styled.div`
    top: 0;
    left: 0;
    height: 100vh;
    position: fixed;

    box-shadow: 1px 1px 1px 1px #cfcfca;
    
    .pro-sidebar {
        color: #FFF;

        a {
            color: #FFF;
        }
        
        transition: all 1s;
    }

    // Header do MENU \\
    .sidebar-header {    
        .sidebar-logo {
            margin-top: 10px;
            margin-left: 15px;
            margin-right: 20px;
        }      

        border-bottom: 1px solid white !important;
    }
    
    .sidebar-menu-user {
        border-top: 1px solid white !important;
    }

    // Retirar o fundo preto dos Menus \\
    .pro-inner-list-item {
        background-color: transparent !important;
    }
`;

export const ImgLogo = styled.div`
    background-image: url('https://demos.creative-tim.com/light-bootstrap-dashboard-pro-react/static/media/logo.5d5d9eef.svg');
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
`;

export const ImgUser = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;