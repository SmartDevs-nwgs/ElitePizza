import Footer from '@/Components/Footer'
import Title from '@/Components/Title'
import Main from '@/Components/Main'
import Promotions from '@/Components/SectionPromotions'
import Drinks from '@/Components/SectionDrinks'
import './index.css'

export default function Home() {
  return (
    <>
      <Title />
      <Promotions />
      <Main />
      <Drinks />
      <Footer />
    </>
  )
}
