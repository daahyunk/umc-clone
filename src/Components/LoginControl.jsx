import React, { useState } from 'react';
import styled from "styled-components";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const LoginButtonStyle = styled.button`
        border: 1px solid white;
        padding: 5px 15px 5px 15px;
        border-radius: 20px;
        color:  #0C356A;
        background-color: white;
        margin-right: 10px;
    `;

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn
                ? 
                <span>
                    <LoginButtonStyle onClick={handleLogoutClick}>로그아웃</LoginButtonStyle>
                    <span>환영합니다!</span>
                </span>
                : 
                <span>
                    <LoginButtonStyle onClick={handleLoginClick}>로그인</LoginButtonStyle>
                    <span>로그인 해주세요!</span>
                </span>
            }
        </div>
    );
}

export default LoginControl;
