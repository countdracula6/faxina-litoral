import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import QuemSomos from '../pages/QuemSomos'
import Faxinar from '../pages/Faxinar'  // ✅ FIXED
import ComoAnunciar from '../pages/ComoAnunciar'
import ComoContratar from '../pages/ComoContratar'
import Contato from '../pages/Contato'
import Contratar from '../pages/Contratar';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/faxinar" element={<Faxinar />} />
      <Route path="/como-anunciar" element={<ComoAnunciar />} />
       <Route path="/como-contratar" element={<ComoContratar />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contratar" element={<Contratar />} />
      {/* More routes later like /anunciar, /produtos, etc */}
    </Routes>
  )
}
