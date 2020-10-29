import styled from 'styled-components';

export const Container = styled.div`
    background-color: #e9ecef;
    padding: 30px 15px;
    display: block;
    
    .nav, .nav-item {
        border-bottom: 0px !important;
    }

    .tab-pane {
        min-height: 350px;
        border-top-left-radius: 0px !important;
        border-top-right-radius: 0px !important;
    }

    .card {
        border-radius: 0px;
        
    }


`;

export const TabsWrapper = styled.div`
    .tabs-wrapper {
        background: #FFF;
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
        color: #333;
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
        border: 1px solid #CCC;
        border-radius: 5px;
        padding: .375rem .75rem;
        color: black;
        font-weight: 600;
    }
    
    
    .card-user {
        padding: 0 !important;

        
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
`;