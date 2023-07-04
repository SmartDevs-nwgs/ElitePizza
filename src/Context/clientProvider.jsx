'use client'

import { createContext, useEffect, useState } from 'react'
import { api } from '@/services/api'

export const ClientContext = createContext({})

export const clientProvider = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginInfo = {
    email: email,
    password: password,
  }

  const login = async (loginInfo) => {
    return await api
      .post(`login`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const updateUser = async () => {
    return await api
      .patch(`users/update`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createUser = async () => {
    return await api
      .post(`users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const contextValue = {
    login,
    createUser,
    updateUser,
    setEmail,
    setPassword,
    loginInfo,
  }

  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  )
}
