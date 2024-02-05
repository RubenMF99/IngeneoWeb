import { useState } from 'react'
import { Modal } from '../types/types'
import { Link } from 'react-router-dom'
import AddProductModal from '../components/products/AddProductModal'
import DeleteProductModal from '../components/products/DeleteProductModal'
import ViewProductModal from '../components/products/ViewProductModal'

const Productos = () => {
  const [modal, setModal] = useState<Modal>({ active: false, modal: '' })

  const options = [
    {
      id: 1,
      value: 'Agregar producto',
      modal: 'add',
      background: 'bg-green-200',
    },
    {
      id: 2,
      value: 'Eliminar producto',
      modal: 'delete',
      background: 'bg-red-200',
    },
    {
      id: 3,
      value: 'Ver tus productos',
      modal: 'view',
      background: 'bg-yellow-200',
    },
  ]

  return (
    <div className="text-center m-auto">
      <h1 className="text-xl font-bold uppercase">Gestion de productos</h1>
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
                  <AddProductModal setModal={setModal} />
                )}
                {modal.modal === 'delete' && (
                  <DeleteProductModal setModal={setModal} />
                )}
                {modal.modal === 'view' && <ViewProductModal />}
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
export default Productos
