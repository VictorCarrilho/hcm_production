import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.colorGray};
    padding: 30px 15px;
    display: block;
    
    .nav, .nav-item, .active {
        border-bottom: 0px !important;    
        background-color: ${props => props.theme.colors.background} !important;
        color: ${props => props.theme.colors.text} !important;
    }

    .tab-content {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    .tab-pane {
        min-height: 350px;
        border-top-left-radius: 0px !important;
        border-top-right-radius: 0px !important;

        color: ${props => props.theme.colors.text};
        border: 1px solid #FFF;
    }

    .tab {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        border: 1px solid #FFF;
    }

    .card {
        border-radius: 0px;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        border: 0.1px solid #CCC;
    }


`;

export const TabsWrapper = styled.div`
    .tabs-wrapper {
        background: ${props => props.theme.colors.background};
        padding: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
`;

export const TabWrapper = styled.div`
    padding-right: 15px; 
    padding-left: 15px; 

    .card-1 {
        margin-right: 10px;
    }

    .header-profile {
        padding: 15px 15px 0;
        color: ${props => props.theme.colors.text};
    }

    .form-row {
        padding: 15px 15px 0;
    }

    .form-label-user {
        font-size: 14px !important;
    }

    .only-span {
        margin-left: 5px !important;
        margin-right: 5px !important;
        display: flex;
        align-items: center;

        > span {
            padding-left: 10px;
        }
    }

    .span-user-card {
        width: 100%;
        border: 1px solid ${props => props.theme.colors.background_inverse};
        border-radius: 5px;
        padding: .375rem .75rem;
        font-weight: 600;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
    
    
    .card-user {
        padding: 0 !important;
        background: ${props => props.theme.colors.background};

        .card-user-img {
            width: 100%;
            height: 110px;
            overflow: hidden;
            border-radius: 4px 4px 0 0;
            position: relative;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
        
        .card-user-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: -70px;

            background: ${props => props.theme.colors.background};
            color: ${props => props.theme.colors.text};
                
            img {
                position: relative;
                border-radius: 50%;
                width: 124px;
                height: 124px;
                border: 5px solid #fff;
                position: relative;
                margin-bottom: 15px;
            }
        
        }
    }
`;


export const FooterWrapper = styled.div`    
    margin-top: 25px;
    padding-right: 15px; 
    padding-left: 15px;

    .card {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
    color: ${props => props.theme.colors.text};
`;