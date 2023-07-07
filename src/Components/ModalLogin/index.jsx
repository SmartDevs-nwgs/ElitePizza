import { useContext, useState } from 'react'
import { ClientContext } from '@/context/clientProvider'

const ModalLogin = ({ openModal }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const sendPassword = { password: password }
  const sendEmail = { email: email }
  const { loginUser } = useContext(ClientContext)

  return (
    <>
      {openModal ? (
        <div className="z-50 bg-black bg-opacity-25 backdrop-blur-sm w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
          <form className="w-max h-max bg-grey flex flex-col justify-center items-center p-5 rounded-lg">
            <h1 className="text-black text-2xl">Login</h1>
            <input
              className="p-5 m-3 rounded-xl text-black"
              type="text"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            ></input>
            <input
              className="p-5 m-3 rounded-xl text-black"
              type="password"
              placeholder="Senha"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            ></input>
            <button
              className="p-5 bg-lime rounded-xl w-64 m-3 cursor-pointer hover:scale-110"
              onClick={() => {
                console.log(sendEmail)
                console.log(sendPassword)

                loginUser(sendEmail, sendPassword)
              }}
            >
              Entrar
            </button>
          </form>
        </div>
      ) : null}
    </>
  )
}

export default ModalLogin
