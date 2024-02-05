import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f8f8f8;
  padding: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #333;
  font-size: 24px;
`;

const Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #555;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e44d26;
    }
  }
`;

const CenterContent = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Profil = () => {
  const kullaniciAdi = useSelector((state) => state.kullanici.kullaniciAdi);

  return (
    <Container>
      <Wrapper>
        <Logo>Location Share App</Logo>
        <Menu>
          <ul>
            <li>
              <Link to="/AnaEkran">Ana Ekran</Link>
            </li>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
            
          </ul>
        </Menu>
      </Wrapper>

      <CenterContent>
        <ProfileContainer>
          <h1>Profil Ekranı</h1>
          {kullaniciAdi ? (
            <p>Kullanıcı Adı: {kullaniciAdi}</p>
          ) : (
            <p>Giriş yapın veya kayıt olun</p>
          )}
        </ProfileContainer>
      </CenterContent>
    </Container>
  );
};

export default Profil;
