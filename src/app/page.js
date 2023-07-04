'use client'

import Title from '@/Components/Title'
import Main from '@/Components/Main'
import Promotions from '@/Components/SectionPromotions'
import Drinks from '@/Components/SectionDrinks'
import { ProductsProvider } from '@/context/productsProvider'
import './index.css'

export default function Home() {
  return (
    <>
      <ProductsProvider>
        <Title />
        <Promotions />
        <Main />
        <Drinks />
      </ProductsProvider>
    </>
  )
}
