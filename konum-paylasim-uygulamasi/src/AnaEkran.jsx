import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import L from 'leaflet';

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

const MapWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  margin-top: 20px;

  button {
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #217dbb;
    }
  }
`;

const AnaEkran = () => {
  const [kullaniciKonumu, setKullaniciKonumu] = useState(null);
  const [harita, setHarita] = useState(null);
  const [konumPaylasiliyor, setKonumPaylasiliyor] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setKullaniciKonumu({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Konum alınamadı:', error.message);
        }
      );
    } else {
      console.error('Tarayıcı konum servisini desteklemiyor.');
    }
  }, []);

  const handleHaritaLoad = (map) => {
    setHarita(map);
  };

  const handleKonumPaylas = () => {
    
    alert('Konum paylaşımı başlatıldı!');
    setKonumPaylasiliyor(true);
  };

  const handleKonumDurdur = () => {
   
    alert('Konum paylaşımı durduruldu!');
    setKonumPaylasiliyor(false);
  };

  const digerKullaniciKonumlari = [
    { id: 1, lat: 41.0082, lng: 28.9784, ad: 'Kullanıcı 1' },
    { id: 2, lat: 41.0235, lng: 28.9744, ad: 'Kullanıcı 2' },
    
  ];

  const kullaniciIcon = new L.Icon({
    iconUrl: 'https://example.com/path-to-your-user-icon.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });

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
            <li>
              <Link to="/ayarlar">Ayarlar</Link>
            </li>
            <li>
              <Link to="/mesajlar">Mesajlar</Link>
            </li>
          </ul>
        </Menu>
      </Wrapper>

      <CenterContent>
        <h1>Harita</h1>
        {kullaniciKonumu && (
          <MapWrapper>
            <MapContainer
              center={kullaniciKonumu}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              whenCreated={handleHaritaLoad}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={kullaniciKonumu} icon={kullaniciIcon}>
                <Popup>Kendi Konumunuz</Popup>
              </Marker>
              {digerKullaniciKonumlari.map((kullanici) => (
                <Marker key={kullanici.id} position={{ lat: kullanici.lat, lng: kullanici.lng }}>
                  <Popup>{kullanici.ad}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </MapWrapper>
        )}

        <ButtonsWrapper>
          <button onClick={handleKonumPaylas} disabled={konumPaylasiliyor}>
            {konumPaylasiliyor ? 'Konum Paylaşılıyor' : 'Konum Paylaş'}
          </button>
          <button onClick={handleKonumDurdur} disabled={!konumPaylasiliyor}>
            Konum Durdur
          </button>
        </ButtonsWrapper>
      </CenterContent>
    </Container>
  );
};

export default AnaEkran;
