
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  )
}
