import styled from 'styled-components';

export const Container = styled.div`
    .row-1-dependentes {
        padding: 20px;
    }

    .accordion-custom {
        padding: 0px 0px 20px;
    }

    // Header dos dependentes \\
    .accordion-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        border: 1px solid #CCC;
    }

    .accordion-button-custom {
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: flex-end;
        width: 100%;

        > div {
            cursor: pointer;
            
            display: flex;
            align-items: center;
            padding: 5px;
            font-size: 13px;
            border: 1px solid #CCC;
            border-radius: 5px;
            
            > svg {
                margin-right: 5px;
            }
        }
    }



    // Body dos dependentes \\
    .accordion-body-custom {
        border: 1px solid #CCC;
        border-top: 0;
    }
`;

export const AccordionDadosDep = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    align-items: left;

    font-size: 13px;
    width: 100%;
`;

export const AccordionTipoDep = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;
    width: auto;
`;
