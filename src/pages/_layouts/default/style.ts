import styled from 'styled-components';

interface Props {
    menuOpen: Boolean;
}

export const Container = styled.nav<Props>`
    transition: all 1s;
    float: right;   // Alinhar a direita
    // Alterar o tamanho do Container se o menu estiver aberto ou não \\    
    width: ${({ menuOpen }) => (menuOpen ? 'calc(100% - 270px)' : 'calc(100% - 80px)')};
    height: 100vh;
`;

export const DashBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e9ecef;
    
    .header {
        // Alinhar no centro e separar igualmente entre os componentes
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FFF;
        
        //  Distanciar das pontas \\
        padding-left: 10px;
        padding-right: 10px;

        // Utilizar 100% da largura diposnivel \\
        width: 100%;
        height: 60px;
        
        border-bottom: 1px solid #CCC;
        // Iniciar a div a esquerda\\
        //float: left;
    }

    .dashboard-container {
        height: calc(100vh - 60px);
        width: 100%;
    }
`;

export const BtnOpenMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 0;
    border-radius: 40px !important;
    height: 40px;
    width: 40px;

    background: #FFF;
    font-size: 25px;

    outline-style: none !important;
    
`;