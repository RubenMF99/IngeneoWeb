import swal from 'sweetalert'
import { ModalProps } from '../../types/types'
import { useAuthStore } from '../../store/auth'
import { newStorage } from '../../api/storages'

const AddStorageModal = ({ setModal }: ModalProps) => {
  const profileId = useAuthStore((state) => state.profile?._id)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = (e.currentTarget[0] as HTMLInputElement).value
    const type = (e.currentTarget[1] as HTMLInputElement).value
    const location = (e.currentTarget[2] as HTMLInputElement).value

    try {
      if (profileId) {
        await newStorage(name, type, location, profileId)

        setModal({
          active: false,
        })
      }

      await swal('Agregado', 'Almacen agregado correctamente', 'success')
    } catch (err) {
      console.error(err)
      await swal('Error', 'No se pudo agregar el almacen', 'error')
    }
  }

  const datos = [
    {
      id: 1,
      placeholder: 'Nombre del almacen',
    },
    {
      id: 2,
      placeholder: 'Tipo de almacen',
    },
    {
      id: 3,
      placeholder: 'Ubicacion',
    },
  ]

  return (
    <>
      <h1 className="text-xl font-bold">Agregar almacen</h1>
      <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
        {datos.map((dato) => (
          <input
            required
            key={dato.id}
            className="p-2 m-2 border-2 rounded-md"
            type="text"
            placeholder={dato.placeholder}
          />
        ))}
        <input
          type="submit"
          value="Agregar"
          className="bg-green-200 p-2 cursor-pointer"
        />
      </form>
    </>
  )
}
export default AddStorageModal
