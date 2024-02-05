import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../types/types'
import AddShippingModal from '../components/shipping/AddShippingModal'
import ViewShippingModal from '../components/shipping/ViewShippingModal'
import DeleteShippingModal from '../components/shipping/DeleteShippingModal'

const Shippings = () => {
  const [modal, setModal] = useState<Modal>({ active: false, modal: '' })

  const options = [
    {
      id: 1,
      value: 'Agregar pedido',
      modal: 'add',
      background: 'bg-green-200',
    },
    {
      id: 2,
      value: 'Eliminar pedido',
      modal: 'delete',
      background: 'bg-red-200',
    },
    {
      id: 3,
      value: 'Ver tus pedidos',
      modal: 'view',
      background: 'bg-yellow-200',
    },
  ]

  return (
    <div className="text-center m-auto">
      <h1 className="text-xl font-bold uppercase">Gestion de envios</h1>
      <div className="pt-4 flex flex-col">
        {options.map((option) => (
          <button
            key={option.id}
            className={`${option.background} p-2 m-2 rounded-md`}
            onClick={() => setModal({ active: true, modal: option.modal })}
          >
            {option.value}
          </button>
        ))}
        <button className="p-2 m-2">
          <Link to="/">Volver</Link>
        </button>

        {modal.active && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              <div className="overflow-y-auto max-h-96">
                {modal.modal === 'add' && (
                  <AddShippingModal setModal={setModal} />
                )}
                {modal.modal === 'delete' && (
                  <DeleteShippingModal setModal={setModal} />
                )}
                {modal.modal === 'view' && <ViewShippingModal />}
              </div>
              <button
                className="m-4"
                onClick={() => setModal({ active: false, modal: '' })}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Shippings
