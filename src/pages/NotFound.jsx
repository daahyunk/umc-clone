import React from 'react';
import { useNavigate } from 'react-router-dom';

const notFoundStyle = {
    color: 'white',
};

function NotFound() {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/');
    };

    return (
        <div style={notFoundStyle}>
            <h1>해당 페이지를 찾지 못했습니다.</h1>
            <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
            <button onClick={handleNavigateToHome}>메인페이지로 이동</button>
        </div>
    );
}

export default NotFound;
