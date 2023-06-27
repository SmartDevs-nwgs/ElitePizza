import Image from 'next/image'
import pizza from '../../assets/images/titleImg.png'

const Title = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row bg-mainBackground w-screen justify-around items-center p-16 ">
        <div className="">
          <Image src={pizza} />
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
