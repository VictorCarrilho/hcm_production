import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text_inverse};

        .breadcrumb-item {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.colors.text};


            svg {
                margin-top: -2px;
                margin-right: 5px;
            }
        }
    }

`;
