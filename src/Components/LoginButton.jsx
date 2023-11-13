// src/Components/LoginButton.jsx
import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LoginButtonStyle = styled.button`
    left: 93%;
    top: 15px;
    position: absolute;
    border: 1px solid white;
    padding: 5px 15px 5px 15px;
    border-radius: 20px;
    color:  #0C356A;
    background-color: white;
    margin-right: 10px;
    cursor: pointer;
`;

function LoginButton() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // 로그인 버튼을 클릭했을 때 LoginPage로 이동
        navigate('/login'); // useNavigate hook 활용
    };

    return (
        <div>
            <LoginButtonStyle onClick={handleLoginClick}>로그인</LoginButtonStyle>
        </div>
    );
}

export default LoginButton;
