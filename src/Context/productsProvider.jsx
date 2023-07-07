'use client'

import { createContext, useEffect, useState, useContext } from 'react'
import { api } from '@/services/api'
import { ClientContext } from '@/context/clientProvider'

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartList, setCartList] = useState(0)
  const { token } = useContext(ClientContext)

  const listProducts = async () => {
    return await api
      .get(`products`)
      .then((response) => {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const editProduct = async () => {
    return await api
      .patch(`products/${id}`, {
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

  const createProduct = async (newProduct) => {
    return await api
      .post(`products`, newProduct, {
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
    listProducts,
    createProduct,
    editProduct,
    products,
    cartList,
    setCartList,
  }

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}
