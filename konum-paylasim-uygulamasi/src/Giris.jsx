
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setKullaniciAdi } from './store/kullaniciSlice';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 600px;
  text-align: center;
`;

const FormSection = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: calc(100% - 30px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
`;

const PasswordIcon = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Giris = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [loginScreenShrink, setLoginScreenShrink] = useState(false);
  const [registrationScreenShrink, setRegistrationScreenShrink] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(null);
  };

  const handleRegistrationEmailChange = (e) => {
    setRegistrationEmail(e.target.value);
    setRegistrationError(null);
  };

  const handleRegistrationPasswordChange = (e) => {
    setRegistrationPassword(e.target.value);
    setRegistrationError(null);
  };

  const login = () => {
    if (!email || !password) {
      setLoginError("E-posta ve şifre alanları boş bırakılamaz.");
      return;
    }

    
    dispatch(setKullaniciAdi(email));

   
    navigate('/AnaEkran');
  };

  const register = () => {
    if (!registrationEmail || !registrationPassword) {
      setRegistrationError("E-posta ve şifre alanları boş bırakılamaz.");
      return;
    }

    
    navigate('/AnaEkran');
  };

  const toggleLoginScreen = () => {
    setLoginScreenShrink(!loginScreenShrink);
    setRegistrationScreenShrink(false);
  };

  const toggleRegistrationScreen = () => {
    setRegistrationScreenShrink(!registrationScreenShrink);
    setLoginScreenShrink(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <FormContainer>
        <FormSection style={{ transform: loginScreenShrink ? 'scale(0.8)' : 'scale(1)' }}>
          <Title onClick={toggleLoginScreen}>Giriş</Title>
          {!loginScreenShrink && (
            <>
              <InputContainer>
                <Input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={handleEmailChange}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Şifre'
                  value={password}
                  onChange={handlePasswordChange}
                />
                <PasswordIcon onClick={toggleShowPassword}>{showPassword ? '🙈' : '👁️'}</PasswordIcon>
              </InputContainer>
              {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
              <Button onClick={login}>Giriş Yap</Button>
            </>
          )}
        </FormSection>

        <FormSection style={{ transform: registrationScreenShrink ? 'scale(0.8)' : 'scale(1)' }}>
          <Title onClick={toggleRegistrationScreen}>Kayıt Ol</Title>
          {!registrationScreenShrink && (
            <>
              <InputContainer>
                <Input
                  type='email'
                  placeholder='Email'
                  value={registrationEmail}
                  onChange={handleRegistrationEmailChange}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Şifre'
                  value={registrationPassword}
                  onChange={handleRegistrationPasswordChange}
                />
                <PasswordIcon onClick={toggleShowPassword}>{showPassword ? '🙈' : '👁️'}</PasswordIcon>
              </InputContainer>
              {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
              <Button onClick={register}>Kayıt Ol</Button>
            </>
          )}
        </FormSection>
      </FormContainer>
    </Container>
  );
};

export default Giris;
