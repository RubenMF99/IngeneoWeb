import swal from 'sweetalert'
import { newProduct } from '../../api/product'
import { useAuthStore } from '../../store/auth'
import { ModalProps } from '../../types/types'

const AddProductModal = ({ setModal }: ModalProps) => {
  const idCliente = useAuthStore((state) => state.profile?._id)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const name = (e.currentTarget[0] as HTMLInputElement).value
      const transporte = (e.currentTarget[1] as HTMLSelectElement).value

      if (idCliente) {
        await newProduct({
          idCliente,
          tiposProducto: name,
          transporte,
        })

        await swal(
          'Producto agregado',
          'El producto ha sido agregado',
          'success'
        )
      }
      setModal({ active: false, modal: '' })
    } catch (err) {
      swal('Error', 'Ha ocurrido un error', 'error')
      console.error(err)
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold uppercase">Agregar Producto</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name">Tipo de producto</label>
          <input
            className="p-2 m-2 rounded-md border-2"
            required
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="transporte">Transporte</label>
          <select
            name="transporte"
            id="transporte"
            className="p-2 m-2 rounded-md border-2"
          >
            <option value="Tierra">Tierra</option>
            <option value="Maritimo">Maritimo</option>
          </select>
        </div>
        <button className="bg-green-200 p-2 m-2 rounded-md">Agregar</button>
      </form>
    </div>
  )
}
export default AddProductModal
