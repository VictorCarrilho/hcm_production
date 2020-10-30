import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { darken } from 'polished';
import { Input as InputRocketSeat } from '@rocketseat/unform';

interface Props {
    type: String;
    name: String;
    placeholder?: String;
}

export const Container = styled.div`
    .wave {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: -1;

        @media screen and (max-width: 900px){
            display: none;
        }
    }

    .teste {
        display: flex;
        justify-content: space-between;
    }
`;

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;

    @media screen and (max-width: 1050px){
        grid-gap: 5rem;
    }

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
    
`;

export const DivImageLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > img {
        width: 500px;
        
        @media screen and (max-width: 1000px){
            width: 400px;
        }
    }

    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    > form {
        width: 360px;

        img {
            height: 100px;
        }

        @media screen and (max-width: 1000px){
            width: 290px;
        }
    }

    a {
        display: block;
        text-align: right;
        text-decoration: none;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
    }

    a:hover{
        color: #38d39f;
    }
    @media screen and (max-width: 900px){
        justify-content: center;
    }    
`;

export const TitleH2 = styled.h2`
    margin: 15px 0;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 2.9rem;

    @media screen and (max-width: 1000px){
        font-size: 2.4rem;
        margin: 8px 0;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;

    .one {
        margin-top: 0;
    }

    .pass {
        margin-bottom: 4px;
    }

    &:before, &:after{
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: #38d39f;
        transition: .4s;
    }


    &:before{
        right: 50%;
    }

    &:after{
        left: 50%;
    }

    &:focus:before, &:focus:after{
        width: 50%;
    }

    &:focus > .divInput > h5 {
        top: -5px;
        font-size: 15px;
    }

    &:focus > .divIcon > i {
        color: #38d39f;
    }
`;

export const DivIcon = styled.div`
    color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconFaUserAlt = styled(FaUserAlt)`
    transition: .3s;
`;


export const DivInput = styled.div`
    position: relative;
    height: 45px;    
`;

export const LoginH5 = styled.h5`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    transition: .3s;
`;

export const InputLogin = styled(InputRocketSeat) <Props>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-family: 'poppins', sans-serif;
`;

export const IconFaLock = styled(FaLock)``;

export const BtnLogin = styled.button`
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, rgba(63, 61, 86, 0.9), ${darken(0.6, 'rgba(63, 61, 86, 0.9)')}, #32be8f);
    background-size: 200%;
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    cursor: pointer;
    transition: .5s;

    &:hover{
        background-position: right;
    }
`;