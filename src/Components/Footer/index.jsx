import { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalLogin from '../ModalLogin'

const Footer = ({ handleOpenModal }) => {
  return (
    <>
      <div className="flex flex-col bg-mainBackground w-full justify-around items-center p-16 mt-16x lg:p-5 xs:p-4">
        <h1 className="xl:text-xl text-white lg:text-lg xs:text-sm">
          &copy; Desenvolvido por{' '}
          <span
            onClick={() => {
              window.open('https://smartdevs.vercel.app/', '_blank')
            }}
            className="font-bold cursor-pointer hover:text-lime"
          >
            SmartDevs
          </span>
          <div
            onClick={() => {
              handleOpenModal()
            }}
          >
            <h1 className="text-center">Elite Pizzas</h1>
          </div>
        </h1>
      </div>
    </>
  )
}

export default Footer
