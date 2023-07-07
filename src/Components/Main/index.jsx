import Card2 from '../Cards/card2'
import useWidthPosition from '@/hooks/useWidth'

const Main = () => {
  const widthSize = useWidthPosition()

  return (
    <>
      <main className=" flex justify-center mt-10">
        <div
          id="container"
          className="flex flex-col items-center justify-center xl:w-[900px] lg:w-[600px] xs:w-[300px]"
        >
          <section id="pizza" className="w-full">
            <h1 className="font-bold underline xl:text-4xl lg:text-3xl xs:text-xl">
              Pizzas doces e salgadas
            </h1>
            <div className="flex justify-between">
              <p className="xl:text-2xl font-medium lg:text-xl xs:text-lg">
                Pizzas a partir de <span className="font-bold">R$ 33,99</span>
              </p>
              <p className="xl:text-2xl font-medium  xs:hidden">
                Monte a sua pizza do seu{' '}
                <span className="font-bold">jeito!</span>
              </p>
            </div>
            <div id="card-pizza" className="border-solid border-b-2 mt-5 ">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  Pizza 1 Sabor
                </h1>
                <h2 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  A partir de <span className="text-green">R$ 33,99</span>
                </h2>
              </div>
              <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
                Escolha um dentro de nossos deliciosos
                <span className="font-bold"> sabores! </span>
              </p>
            </div>
            <div id="card-pizza2" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  Pizza Especiais
                </h1>
                <h2 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  A partir de <span className="text-green">R$ 33,99</span>
                </h2>
              </div>
              <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
                Escolha dois dentro de nossos deliciosos
                <span className="font-bold"> sabores! </span>
              </p>
            </div>
          </section>
          <section id="portions" className="w-full mt-10 mb-10">
            <h1 className="font-bold underline xl:text-4xl lg:text-3xl xs:text-xl">
              Porções
            </h1>
            <p className="xl:text-2xl font-medium lg:text-xl xs:text-lg">
              Porções a partir de <span className="font-bold">R$ 30,00</span>
            </p>
            <div id="card-portions" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  Porção 1
                </h1>
                <h2 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  A partir de <span className="text-green">R$ 30,00</span>
                </h2>
              </div>
              <div className="flex justify-between">
                {widthSize > 500 ? (
                  <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
                    (Acompanha porção de batata ou polenta frita)
                  </p>
                ) : (
                  <p className="text-sm">Com acompanhamentos</p>
                )}
                <p className="font-bold xl:text-2xl lg:text-xl xs:text-sm">
                  P - M - G
                </p>
              </div>
            </div>
            <div id="card-portions2" className="border-solid border-b-2 mt-5">
              <div className="flex justify-between mt-3 mb-3">
                <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  Porção 2
                </h1>
                <h2 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  A partir de <span className="text-green">R$ 30,00</span>
                </h2>
              </div>
              <div className="flex justify-between">
                {widthSize > 500 ? (
                  <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
                    (Acompanha porção de batata ou polenta frita)
                  </p>
                ) : (
                  <p className="text-sm">Com acompanhamentos</p>
                )}
                <p className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                  P - M - G
                </p>
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
