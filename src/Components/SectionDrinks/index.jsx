const SectionDrinks = () => {
  return (
    <main className=" flex justify-center mt-10">
      <div
        id="container"
        className="flex flex-col items-center justify-center w-[900px]"
      >
        <section className="w-full">
          <h1 className="font-bold underline text-4xl">Refrigerantes</h1>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Refrigerante 600ml</h1>
              <h2 className="text-green text-2xl font-bold">R$ 5,00</h2>
            </div>
            <p className="font-medium text-xl">Garrafa 600ml</p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Refrigerante 1L</h1>
              <h2 className="font-bold text-2xl text-green">R$ 10,00</h2>
            </div>
            <p className="font-medium text-xl">Garrafa 1L</p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Refrigerante 2L</h1>
              <h2 className="font-bold text-2xl text-green">R$ 15,00</h2>
            </div>
            <p className="font-medium text-xl">Garrafa 2L</p>
          </div>
        </section>
        <section id="beer" className="w-full mt-10 mb-10">
          <h1 className="font-bold underline text-4xl">Cerveja</h1>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Cerveja 350ml</h1>
              <h2 className="text-green text-2xl font-bold">R$ 5,00</h2>
            </div>
            <p className="font-medium text-xl">Lata 350ml</p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Cerveja Long Neck</h1>
              <h2 className="font-bold text-2xl text-green">R$ 10,00</h2>
            </div>
            <p className="font-medium text-xl">Long Neck</p>
          </div>
          <div className="border-solid border-b-2 mt-5">
            <div className="flex justify-between mt-3 mb-3">
              <h1 className="font-bold text-2xl">Cerveja Litrão</h1>
              <h2 className="font-bold text-2xl text-green">R$ 15,00</h2>
            </div>
            <p className="font-medium text-xl">Litrão</p>
          </div>
        </section>
      </div>
    </main>
  )
}
export default SectionDrinks
