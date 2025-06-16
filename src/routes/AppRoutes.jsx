import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import QuemSomos from '../pages/QuemSomos'
import Faxinar from '../pages/Faxinar'  // ✅ FIXED

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/faxinar" element={<Faxinar />} />
      {/* More routes later like /anunciar, /produtos, etc */}
    </Routes>
  )
}
