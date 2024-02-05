import axios from '../libs/axios'
import { Product } from '../types/types'

export const newProduct = async (product: Product) => {
  return axios.post('/producto', product)
}

export const getProduct = async (id: string) => {
  return axios.get(`/producto/${id}`)
}

export const deleteProduct = async (id: number) => {
  return axios.delete(`/producto/${id}`)
}

export const getProducts = async () => {
  return axios.get('/admin/productos')
}
