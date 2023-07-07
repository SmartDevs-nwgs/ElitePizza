import Image from 'next/image'
import pizza from '../../assets/images/titleImg.png'
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { ProductsContext } from '@/context/productsProvider'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useWidthPosition from '@/hooks/useWidth'

const Title = () => {
  const { cartList, setCartList } = useContext(ProductsContext)
  const phoneNumber = '44998708293'
  const widthSize = useWidthPosition()

  const handleWhatsAppClick = () => {
    const message = 'Olá, estou interessado em seus produtos.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(url, '_blank')
  }

  return (
    <>
      <main className="flex flex-col xs:p-8  lg:flex-row xl:p-10 bg-mainBackground bg-contain w-full justify-around items-center p-16 ">
        <div className="">
          <Image
            src={pizza}
            className="w-full xl:h-72 xs:h-32"
            alt="titleImg"
          />
        </div>
        <div className="fixed xl:right-0 lg:right-0 lg:top-3 xs:left-5 xs:top-3 z-30 flex flex-row gap-5 xs:gap-2">
          {cartList > 0 ? (
            <div className="bg-lime text-black rounded-full w-6 h-6 flex items-center justify-center -mr-12 -mt-2  xs:text-[10px] xs:w-5 xs:h-5">
              <p>{cartList}</p>
            </div>
          ) : null}
          {widthSize > 500 ? (
            <Link to="/cart">
              <FaShoppingCart
                className="cursor-pointer hover:scale-110"
                color="black"
                size={35}
                onClick={() => {}}
              />
            </Link>
          ) : (
            <Link to="/cart">
              <FaShoppingCart
                className="cursor-pointer hover:scale-110"
                color="black"
                size={24}
                onClick={() => {}}
              />
            </Link>
          )}
          {widthSize > 500 ? (
            <FaWhatsapp
              onClick={handleWhatsAppClick}
              className="cursor-pointer hover:scale-110"
              color="lime"
              size={35}
            />
          ) : (
            <FaWhatsapp
              onClick={handleWhatsAppClick}
              className="cursor-pointer hover:scale-110 xs:ml-2"
              color="lime"
              size={24}
            />
          )}
        </div>

        <div className="flex flex-col items-center max-w-4xl">
          <h2 className="font-greatPrimer text-white xl:text-5xl md:text-6xl xs:text-2xl lg:text-4xl">
            Prove o verdadeiro
          </h2>
          <h2 className="font-lobster text-white xl:text-6xl xs:text-3xl lg:text-5xl">
            SABOR!
          </h2>
          <h2 className="font-greatPrimer text-white xl:text-5xl md:text-6xl text-center xs:text-2xl lg:text-4xl">
            A melhor e mais barata de cianorte
          </h2>
        </div>
      </main>
    </>
  )
}

export default Title
