import styled, { createGlobalStyle } from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { darken } from 'polished';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    primary?: Boolean;
    big?: Boolean;
    dark?: Boolean;
    fontBig?: Boolean;
}


export const theme = {
    colors: {
        lightColor: '#F5F5DC',
        darkColor: '#010606',
        whiteColor: '#FFF',
        primayColor: 'rgba(28, 27, 37, 0.8)'
    }
}

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }


    *, input, button, textarea {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    .breadcrumb {
        align-items: center;
        justify-content: flex-end;
        font-size: 14px;
        background-color: #FFF;

        .breadcrumb-item {
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                margin-top: -2px;
                margin-right: 5px;
            }
        }
    }

`;


export const Button = styled(LinkScroll) <Props>`
    border-radius: 50px;
    white-space: nowrap;
    
    background: ${({ primary }) => (primary ? '#FFF' : theme.colors.primayColor)};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? theme.colors.primayColor : theme.colors.whiteColor)};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    font-weight: 600;
    
    outline: none;
    border: none;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#FFF' : `${darken(0.1, 'rgba(63, 61, 86, 0.9)')}`)};  
    }
`;