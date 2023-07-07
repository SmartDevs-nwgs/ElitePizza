'use client'

import { useState } from 'react'
import Title from '@/Components/Title'
import Main from '@/Components/Main'
import Promotions from '@/Components/SectionPromotions'
import Drinks from '@/Components/SectionDrinks'
import Footer from '@/Components/Footer'
import ModalLogin from '@/Components/ModalLogin'
import { ProductsProvider } from '@/context/productsProvider'
import '../../app/index.css'

export default function MainPage() {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <ProductsProvider>
        {openModal && (
          <ModalLogin openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <Title />
        <Promotions />
        <Main />
        <Drinks />
        <Footer handleOpenModal={handleOpenModal} />
      </ProductsProvider>
    </>
  )
}
