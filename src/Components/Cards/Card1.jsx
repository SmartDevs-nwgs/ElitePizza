const card1 = () => {
  return (
    <div className="xl:w-[900px] xl:h-[134px] bg-red1 rounded-[5px] flex xl:mt-8 p-10 xs:w-[300px] xs:h-[50px] xs:mt-5 lg:w-[600px]">
      <div className="flex flex-col justify-center">
        <p className="text-white xl:text-2xl xs:text-sm lg:text-xl">
          Aproveite nossas <span className="font-bold "> promossões!</span>
        </p>
        <p className="text-white xl:text-2xl xs:text-sm lg:text-xl">
          Aqui na Elite Pizzas temos promoções
          <span className="font-bold"> diárias</span> para você!
        </p>
      </div>
    </div>
  )
}
export default card1
