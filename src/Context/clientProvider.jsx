export const clientProvider = () => {
  const login = async () => {
    return await api
      .post(`https://eliteback-api.onrender.com/login`, {
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

  const updateUser = async () => {
    return await api
      .patch(`https://eliteback-api.onrender.com/users/update`, {
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
      .post(`https://eliteback-api.onrender.com/users`, {
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

  return {
    login,
    createUser,
    updateUser,
  }
}
