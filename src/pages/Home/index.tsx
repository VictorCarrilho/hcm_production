import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { companyRequest } from '../../store/modules/company/actions';
import { Container } from './style';


const Home: React.FC = () => {
    const [companyName, setCompanyName] = useState('null');
    const dispatch = useDispatch();

    async function handleSubmit(companyName: String) {
        if (companyName !== "" && companyName !== 'null' && companyName !== null) {
            dispatch(companyRequest(companyName));
        }
    }


    return (
        <Container>
            <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Digite sua empresa"
                onChange={(value: any) => setCompanyName(value.target.value)}
            />
            <button onClick={() => handleSubmit(companyName)}>Enviar</button>
        </Container>
    )
}

export default Home;