import { useState } from 'react'
import { ModalProps, Product } from '../../types/types'
import { deleteProduct, getProduct } from '../../api/product'
import swal from 'sweetalert'

const DeleteProductModal = ({ setModal }: ModalProps) => {
  const [search, setSearch] = useState('')

  const [product, setProduct] = useState<null | Product>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = (e.currentTarget[0] as HTMLInputElement).value
    try {
      const response = await getProduct(id)
      const { tiposProducto, transporte } = response.data

      setProduct({
        id: parseInt(id),
        tiposProducto,
        transporte,
      })
    } catch (err) {
      console.error(err)
      await swal('Error', 'No se pudo encontrar el almacen digitado', 'error')
    }
  }

  const handleDeleteProduct = async () => {
    try {
      if (product?.id) {
        await deleteProduct(product.id)
      }
      setModal({ active: false, modal: '' })
      await swal('Eliminado', 'Producto eliminado correctamente', 'success')
    } catch (err) {
      console.error(err)
      await swal('Error', 'No se pudo eliminar el producto', 'error')
    }
  }

  return (
    <>
      <h1 className="text-xl font-bold">Eliminar producto</h1>
      <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
        <input
          required
          className="p-2 m-2 border-2 rounded-md"
          type="number"
          placeholder="Id del producto"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {product && (
          <>
            <div className="bg-green-200 p-2">
              <p>ID: {product?.id}</p>
              <p>Tipo: {product?.tiposProducto}</p>
              <p>Transporte: {product?.transporte}</p>
            </div>
            <input
              onClick={handleDeleteProduct}
              type="button"
              className="p-2 m-2 bg-red-200 rounded-md"
              value="Eliminar"
            />
          </>
        )}
      </form>
    </>
  )
}
export default DeleteProductModal
