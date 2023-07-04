import Card2 from '../Cards/card2'

const Main = () => {
  return (
    <>
      <main className=" flex justify-center mt-10">
        <div
          id="container"
          className="flex flex-col items-center justify-center w-[900px]"
        >
          <section id="pizza" className="w-full">
            <h1 className="font-bold underline text-4xl">
              Pizzas doces e salgadas
            </h1>
            <div className="flex justify-between">
              <p className="text-2xl font-medium">
                Pizzas a partir de <span className="font-bold">R$ 33,99</span>
              </p>
              <p className="text-2xl font-medium">
                Monte a sua pizza do seu{' '}
                <span className="font-bold">jeito!</span>
              </p>
            </div>
            <div id="card-pizza" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold text-2xl">Pizza 1 Sabor</h1>
                <h2 className="font-bold text-2xl ">
                  A partir de <span className="text-green">R$ 33,99</span>
                </h2>
              </div>
              <p className="font-medium text-xl">
                Escolha um dentro de nossos deliciosos
                <span className="font-bold"> sabores! </span>
              </p>
            </div>
            <div id="card-pizza2" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold text-2xl">Pizza 2 Sabores</h1>
                <h2 className="font-bold text-2xl">
                  A partir de <span className="text-green">R$ 33,99</span>
                </h2>
              </div>
              <p className="font-medium text-xl">
                Escolha dois dentro de nossos deliciosos
                <span className="font-bold"> sabores! </span>
              </p>
            </div>
          </section>
          <section id="portions" className="w-full mt-10 mb-10">
            <h1 className="font-bold underline text-4xl">Porções</h1>
            <p className="text-2xl font-medium">
              Porções a partir de <span className="font-bold">R$ 30,00</span>
            </p>
            <div id="card-portions" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold text-2xl">Porção 1</h1>
                <h2 className="font-bold text-2xl">
                  A partir de <span className="text-green">R$ 30,00</span>
                </h2>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-xl">
                  (Acompanha porção de batata ou polenta frita)
                </p>
                <p className="font-bold text-2xl">P - M - G</p>
              </div>
            </div>
            <div id="card-portions2" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold text-2xl">Porção 2</h1>
                <h2 className="font-bold text-2xl">
                  A partir de <span className="text-green">R$ 30,00</span>
                </h2>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-xl">
                  (Acompanha porção de batata ou polenta frita)
                </p>
                <p className="font-bold text-2xl">P - M - G</p>
              </div>
            </div>
          </section>
          <Card2 />
        </div>
      </main>
    </>
  )
}

export default Main
