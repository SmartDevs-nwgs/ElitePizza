'use client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@/pages/home/mainPage'
import Cart from '@/pages/cart'

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
