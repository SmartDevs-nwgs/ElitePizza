const SectionDrinks = () => {
  return (
    <main className=" flex justify-center mt-10">
      <div
        id="container"
        className="flex flex-col items-center justify-center xl:w-[900px] lg:w-[600px] xs:w-[300px]"
      >
        <section className="w-full">
          <h1 className="font-bold underline xl:text-4xl lg:text-3xl xs:text-xl">
            Refrigerantes
          </h1>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Refrigerante 600ml
              </h1>
              <h2 className="text-green xl:text-2xl lg:text-xl font-bold xs:text-lg">
                R$ 5,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
              Garrafa 600ml
            </p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Refrigerante 1L
              </h1>
              <h2 className="font-bold xl:text-2xl lg:text-xl text-green xs:text-lg">
                R$ 10,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
              Garrafa 1L
            </p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Refrigerante 2L
              </h1>
              <h2 className="font-bold xl:text-2xl lg:text-xl text-green xs:text-lg">
                R$ 15,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
              Garrafa 2L
            </p>
          </div>
        </section>
        <section id="beer" className="w-full mt-10 mb-10">
          <h1 className="font-bold underline xl:text-4xl lg:text-2xl xs:text-xl">
            Cerveja
          </h1>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Cerveja 350ml
              </h1>
              <h2 className="text-green xl:text-2xl lg:text-xl font-bold xs:text-lg">
                R$ 5,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
              Lata 350ml
            </p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Cerveja Long Neck
              </h1>
              <h2 className="font-bold xl:text-2xl text-green lg:text-xl xs:text-lg">
                R$ 10,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl  lg:text-lg xs:text-sm">
              Long Neck
            </p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold xl:text-2xl lg:text-xl xs:text-lg">
                Cerveja Litrão
              </h1>
              <h2 className="font-bold xl:text-2xl lg:text-xl text-green xs:text-lg">
                R$ 15,00
              </h2>
            </div>
            <p className="font-medium xl:text-xl lg:text-lg xs:text-sm">
              Litrão
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
export default SectionDrinks
