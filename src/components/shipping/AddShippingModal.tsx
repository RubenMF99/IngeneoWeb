import { ModalProps } from '../../types/types'

const AddShippingModal = ({ setModal }: ModalProps) => {
  return (
    <div>
      <p>Agregar pedido</p>
      <form>
        <label>Cantidad de producto</label>
        <input type="number" />
        <label>Tipo de producto</label>
      </form>
    </div>
  )
}
export default AddShippingModal
