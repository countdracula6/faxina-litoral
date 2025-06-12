import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import QuemSomos from '../pages/QuemSomos'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      {/* More routes later like /anunciar, /produtos, etc */}
    </Routes>
  )
}
