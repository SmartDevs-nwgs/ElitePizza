import Image from 'next/image'
import promoPizza from '@/assets/images/pizzaMussarela.png'
import Card1 from '../Cards/Card1'

const Promotions = () => {
  const promotions = [
    {
      name: 'Pizza Mussarela',
      price: '30,00',
      img: promoPizza,
    },
    {
      name: 'Pizza Mussarela',
      price: '30,00',
      img: promoPizza,
    },
    {
      name: 'Pizza Mussarela',
      price: '30,00',
      img: promoPizza,
    },
  ]

  return (
    <section className="flex align-center justify-items-center justify-center ">
      <div
        id="content"
        className="flex flex-col items-center justify-center w-[1300px] gap-10"
      >
        <span className="w-full bg-red1 h-5 rounded-[15px] mt-10"></span>
        <h2 className=" text-5xl font-bold">Promoções ativas</h2>
        <div id="promotions " className="flex flex-row gap-10">
          {promotions.map((promotion, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] p-5  text-center"
            >
              <Image src={promotion.img} alt={promotion.name} />
              <div>
                <h2 className="font-medium text-xl">{promotion.name}</h2>
                <h2 className="font-medium text-lg">R${promotion.price}</h2>
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
