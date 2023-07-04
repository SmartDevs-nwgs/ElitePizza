import Image from 'next/image'
import pizza from '../../assets/images/titleImg.png'
import { FaShoppingCart } from 'react-icons/fa'
import { ProductsContext } from '@/context/productsProvider'
import { useContext, useEffect } from 'react'

const Title = () => {
  const { cartList, setCartList } = useContext(ProductsContext)
  return (
    <>
      <main className="flex flex-col md:flex-row bg-mainBackground w-screen justify-around items-center p-16 ">
        <div className="">
          <Image src={pizza} alt="titleImg" />
        </div>
        <div className="fixed right-20 top-20 z-50 cursor-pointer hover:scale-110">
          {cartList > 0 ? (
            <div className="bg-lime text-white rounded-full w-6 h-6 flex items-center justify-center -mr-12 -mt-2">
              <p>{cartList}</p>
            </div>
          ) : null}
          <FaShoppingCart color="black" size={35} onClick={() => {}} />
        </div>

        <div className="flex flex-col items-center max-w-4xl">
          <h2 className="font-greatPrimer text-white text-4xl md:text-6xl">
            Prove o verdadeiro
          </h2>
          <h2 className="font-lobster text-white text-6xl">SABOR!</h2>
          <h2 className="font-greatPrimer text-white text-4xl md:text-6xl text-center">
            A melhor e mais barata de cianorte
          </h2>
        </div>
      </main>
    </>
  )
}

export default Title
