export const productsProvier = () => {
  const listProducts = async () => {
    return await api
      .get(`https://eliteback-api.onrender.com/products`, {
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

  const editProduct = async () => {
    return await api
      .patch(`https://eliteback-api.onrender.com/products/idDoProduto`, {
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

  const createProduct = async () => {
    return await api
      .post(`https://eliteback-api.onrender.com/products`, {
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

  return { listProducts, createProduct, editProduct }
}
