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
    background-color: ${props => props.theme.colors.colorGray};
    
    
    .header {
        // Alinhar no centro e separar igualmente entre os componentes
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.background};
        
        //  Distanciar das pontas \\
        padding-left: 10px;
        padding-right: 10px;

        // Utilizar 100% da largura diposnivel \\
        width: 100%;
        height: 60px;
        
        border-bottom: 1px solid #CCC;
    }

    .dashboard-container {
        height: calc(100vh - 60px);
        width: 100%;

        background: ${props => props.theme.colors.colorGray};
        color: ${props => props.theme.colors.text};
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

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 25px;

    outline-style: none !important;
    
`;



export const Switch_Custom = styled.div`
    margin-right: 100px;

    label
    {
        position:absolute;
        --c:translate(-50%,-50%);
        transform:var(--c);
    }

    .switch {
        position:relative;
        left:0;
        top:0;
        width:40px;
        height:40px;
    }

    label > input{
        position:absolute;
        left:0;
        top:0;
        z-index:5;
        opacity:0;
    }

    .switch span{
        display:block;
        position:absolute;
        left:50%;
        top:50%;
        transform:var(--c);
        border-radius:50%;
        width:70%;
        height:70%;
        background:#FFAC33;
        border:5px solid ${props => props.theme.colors.background};
        transition:all ease 0.15s;
    }

    .switch div{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
    }

    .switch div::before, .switch div::after{
        content:" ";
        display:block;
        position:absolute;
        left:50%;
        top:50%;
        transform:var(--c);
        background:#FFAC33;
        width:12%;
        height:130%;
        border-radius:10px;
        transition:all ease 0.15s;
    }

    .switch div:nth-child(1)::before{
        transform:var(--c) rotate(0deg);
    }

    .switch div:nth-child(1)::after{
        transform:var(--c) rotate(45deg); /*45deg increment each time*/
    }

    .switch div:nth-child(2)::before{
        transform:var(--c) rotate(90deg);
    }

    .switch div:nth-child(2)::after{
        transform:var(--c) rotate(135deg);
    }

    .switch::before, .switch::after{
        content:" ";
        position:absolute;
        left:50%;
        top:50%;
        transform:var(--c);
        border-radius:50%;
        transition:all ease 0.15s;
        background: ${props => props.theme.colors.background};
    }

    .switch::before{
        width:0%;
        height:0%;
        z-index:10;
    }

    .switch::after{
        width:50%;
        height:50%;
    }

    input:checked ~ .switch span{
        width:100%; /*width change*/
        height:100%; /*height change*/
        background:#66757F; /*color change*/
        /*we get a full moon*/
    }

    input:checked ~ .switch div::before,
    input:checked ~ .switch div::after{
        height:50%; /*we hide the sun-rays*/
    }

    input:checked ~ .switch::before{ /*we draw a white circle a left-top corner to show a half moon*/
        left:30%;
        top:30%;
        width:90%;
        height:90%;
    }

    input:checked ~ .switch::after{ /*we hide the sun outline*/
        width:0%;
        height:0%;
    }

    input:not(:checked) ~ .switch{
        transform:rotate(180deg);
        transition:all ease 2.15s 0.1s;
    }
`