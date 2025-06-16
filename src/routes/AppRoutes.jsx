import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import QuemSomos from '../pages/QuemSomos'
import Faxinar from '../pages/Faxinar'  // ✅ FIXED
import ComoAnunciar from '../pages/ComoAnunciar'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/faxinar" element={<Faxinar />} />
      <Route path="/como-anunciar" element={<ComoAnunciar />} />
      {/* More routes later like /anunciar, /produtos, etc */}
    </Routes>
  )
}
