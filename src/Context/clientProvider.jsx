'use client'

import { createContext, useEffect, useState } from 'react'
import { api } from '@/services/api'
import { useContext } from 'react'

export const ClientContext = createContext({})

export const clientProvider = () => {
  const [token, setToken] = useState('')

  const loginUser = async (data) => {
    return await api
      .post(`login`, data)
      .then((response) => {
        setToken(response.data)
        console.log('success')
        console.log(response)
        console.log(response.data)
      })
      .catch((error) => {
        console.log('error', error)
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
    loginUser,
    createUser,
    updateUser,
    setEmail,
    setPassword,
    loginInfo,
    email,
    password,
    token,
  }

  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  )
}
