import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    height: 100%;
    padding: 30px 15px;

    background: ${props => props.theme.colors.background_container};
`;

export const MainWrapper = styled.div`
    border: none;
    background: ${props => props.theme.colors.background_container};
`;