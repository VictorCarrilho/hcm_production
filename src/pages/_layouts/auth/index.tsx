import React from 'react';
import { Container } from './style';

const LayoutAuth: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default LayoutAuth;