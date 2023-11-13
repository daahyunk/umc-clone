import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: white;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 1000px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid gray; 
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border: 2px solid black;
  }
`;

const ErrorMessage = styled.small`
  color: red;
`;

const Button = styled.button`
  width: 1000px; 
  padding: 10px;
  color: white;
  background-color: ${(props) => (props.disabled ? '#e2e2e2' : '#0C356A')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 50px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginPageWrapper>
      <h1>이메일과 비밀번호를 입력해주세요.</h1>

      <InputWrapper>
        <label>이메일 주소</label>
        <br></br>
        <Input
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        {!isValidEmail && <ErrorMessage>올바른 이메일을 입력하세요.</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <label>비밀번호</label>
        <br></br>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </InputWrapper>

      <Button
        onClick={handleSubmit}
        disabled={!isValidEmail || !password}
      >
        확인
      </Button>
    </LoginPageWrapper>
  );
};

export default LoginPage;