import axios from '../libs/axios'

export const login = async (email: string, password: string) => {
  return axios.post('/login', { email, password })
}

export const register = async (
  nombre: string,
  usuario: string,
  password: string,
  email: string
) => {
  return axios.post('/register', {
    nombre,
    usuario,
    password,
    email,
  })
}

export const getProfile = async () => {
  return axios.get('/admin/cliente')
}
