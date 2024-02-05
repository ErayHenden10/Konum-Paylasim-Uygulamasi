import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Giris from './Giris';
import AnaEkran from './AnaEkran'; 
import store from './store'; 
import Profil from './Profil';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Giris />} />
        <Route path="/AnaEkran" element={<AnaEkran />} />
        <Route path='/Profil' element={<Profil />} />
        
      </Routes>
    </Router>
  );
};

export default App;
