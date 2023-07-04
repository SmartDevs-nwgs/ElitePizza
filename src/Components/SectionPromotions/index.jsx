import Image from 'next/image'
import promoPizza from '@/assets/images/pizzaMussarela.png'
import Card1 from '../Cards/Card1'
import { ProductsContext } from '@/context/productsProvider'
import { useContext, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Notification from '../Notification'

const Promotions = () => {
  const [showNotification, setShowNotification] = useState(false)
  const { listProducts, products, cartList, setCartList } = useContext(
    ProductsContext,
  )

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [showNotification])

  useEffect(() => {
    listProducts()
  }, [])

  const addToCart = () => {
    // setCartList([...cartList, newItem])
    setShowNotification(true)
  }

  return (
    <section className="flex align-center justify-items-center justify-center ">
      <div
        id="content"
        className="flex flex-col items-center justify-center w-[900px] gap-10"
      >
        <span className="w-full bg-red1 h-5 rounded-[15px] mt-10"></span>
        <h2 className=" text-5xl font-bold">Promoções ativas</h2>
        {showNotification && <Notification text="Adicionado ao carrinho!" />}
        <div id="promotions " className="flex flex-row gap-10">
          {products.map((promotion, index) => (
            <div
              key={index}
              onClick={() => {
                addToCart()
                setCartList(cartList + 1)
              }}
              className="bg-white rounded-[15px] p-5 text-center cursor-pointer hover:scale-110"
            >
              {promotion.name === 'Pizza de calabresa' && (
                <Image src={promoPizza} alt={promotion.name} />
              )}
              {promotion.name === 'Pizza de frango' && (
                <Image src={promoPizza} alt={promotion.name} />
              )}
              {promotion.name === 'Pizza de bacon' && (
                <Image src={promoPizza} alt={promotion.name} />
              )}

              <div>
                <h2 className="font-medium text-xl">{promotion.name}</h2>
                <div className="flex flex-row justify-center items-center">
                  <h2 className="font-medium text-lg">
                    R$ {promotion.price.toFixed(2)}
                  </h2>
                  <FaPlusCircle
                    size={20}
                    color="white"
                    className="border-solid border border-red bg-red rounded-full ml-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Card1 />
      </div>
    </section>
  )
}

export default Promotions
