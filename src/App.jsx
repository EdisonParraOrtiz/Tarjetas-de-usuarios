import React from 'react';
import Perfil from './views/perfil.jsx'
import Perfiles from './views/perfiles.jsx'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

const App = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route exat path="/" element={<Perfil />}>
        <Route exat path="/perfil" element={<Perfil />} />
          {/* <Route path="*" element={<Perfiles />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;