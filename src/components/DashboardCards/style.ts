import styled from 'styled-components';

export const Container = styled.div`
    .card, .card-body {
        border: none;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        width: 100%;
        border-radius: 5px;        
        margin: 0;
    }
    
    img {
        max-width: 200px;
        height: 200px;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 10px 0px 20px;


        .title-custom {
            color: ${props => props.theme.colors.title_color} !important;
            font-size: 16px;
        }

        .b-custom {
            font-size: 14px !important;
            font-weight: 500;
        }

        
        .flex-row {
            display: flex;
            justify-content: center;
            flex-direction: column !important;
        }
        
        
        .bg-custom {
            background: ${props => props.theme.colors.background_inverse};
        }

        .info-card {
            font-weight: 600;
        }

        .row-card-body, .teste {
            width: 100%;
            height: 100%;
            margin: 0;
        }


    }
`;