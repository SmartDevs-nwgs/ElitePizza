import * as yup from 'yup'

export const loginValidator = yup.object().shape({
  email: yup.string().required('O email é necessário'),
  password: yup.string().required('A senha é necessária'),
})
