import { useEffect, useState } from 'react'
import { Storage } from '../../types/types'
import { getStorages } from '../../api/storages'

const ViewStoragesModal = () => {
  const [storages, setStorages] = useState<null | Storage[]>(null)

  useEffect(() => {
    const fetchStorages = async () => {
      try {
        const response = await getStorages()

        setStorages(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchStorages()
  }, [])

  return (
    <>
      <h1>Tus almacenes</h1>
      {storages?.map((storage) => (
        <div key={storage.id} className="bg-green-200 p-4 m-4">
          <p>ID del almacen: {storage.id}</p>
          <p>Nombre: {storage.nombre}</p>
          <p>Tipo: {storage.tipo}</p>
          <p>Ubicacion: {storage.ubicacion}</p>
        </div>
      ))}
    </>
  )
}
export default ViewStoragesModal
