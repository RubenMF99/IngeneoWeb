import { useState } from 'react'
import swal from 'sweetalert'
import { Storage, ModalProps } from '../../types/types'
import { deleteStorage, getStorage } from '../../api/storages'

const DeleteStorageModal = ({ setModal }: ModalProps) => {
  const [storage, setStorage] = useState<null | Storage>(null)
  const [search, setSearch] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = (e.currentTarget[0] as HTMLInputElement).value

    try {
      const response = await getStorage(id)

      const { nombre, tipo, ubicacion } = response.data

      setStorage({
        id: parseInt(id),
        nombre,
        tipo,
        ubicacion,
      })
    } catch (err) {
      console.error(err)
      await swal('Error', 'No se pudo encotnrar el almacen digitado', 'error')
    }
  }

  const handleDeleteStorage = async () => {
    try {
      await deleteStorage(storage?.id as number)

      setModal({ active: false, modal: '' })
      await swal('Eliminado', 'Almacen eliminado correctamente', 'success')
    } catch (err) {
      console.error(err)
      await swal('Error', 'No se pudo eliminar el almacen', 'error')
    }
  }
  return (
    <>
      <h1 className="text-xl font-bold">Eliminar almacen</h1>
      <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
        <input
          required
          className="p-2 m-2 border-2 rounded-md"
          type="number"
          placeholder="Id del almacen"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {storage && (
          <>
            <div className="bg-green-200 p-2">
              <p>Nombre: {storage?.nombre}</p>
              <p>Tipo: {storage?.tipo}</p>
              <p>Ubicacion: {storage?.ubicacion}</p>
            </div>
            <input
              onClick={handleDeleteStorage}
              type="button"
              value="Eliminar"
              className="bg-red-200 p-2 m-4 cursor-pointer"
            />
          </>
        )}
      </form>
    </>
  )
}
export default DeleteStorageModal
