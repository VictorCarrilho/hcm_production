import React from 'react';
import { Container } from './style';

interface Props {
    toggleTheme(): void;
}

const LayoutAuth: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default LayoutAuth;