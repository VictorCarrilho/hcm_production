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
        max-width: 100%;
    }

    .card-body {
        padding: 10px;        

        .title-custom {
            color: ${props => props.theme.colors.title_color} !important;
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

        .col-center-custom {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
        }
    }
    

    

`;