import axios from '../libs/axios'

export const newStorage = async (
  nombre: string,
  tipo: string,
  ubicacion: string,
  idCliente: number
) => {
  return axios.post('/admin/almacenaje', {
    nombre,
    tipo,
    ubicacion,
    idCliente,
  })
}

export const getStorages = async () => {
  return axios.get('/admin/almacenaje')
}

export const getStorage = async (id: string) => {
  return axios.get(`/admin/almacenaje/${id}`)
}

export const deleteStorage = async (id: number) => {
  return axios.delete(`/admin/almacenaje/${id}`)
}
