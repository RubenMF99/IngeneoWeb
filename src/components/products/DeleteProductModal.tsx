import { useEffect, useState } from 'react'
import { ModalProps, Product } from '../../types/types'
import { deleteProduct, getProducts } from '../../api/product'
import swal from 'sweetalert'

const DeleteProductModal = ({ setModal }: ModalProps) => {
  const [products, setProducts] = useState<null | Product[]>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const resProducts = await getProducts()
      setProducts(resProducts.data)
    }
    fetchProducts()
  }, [])

  const handleDelete = async (id: number | undefined) => {
    if (id) {
      await deleteProduct(id)
      swal('Producto eliminado', '', 'success')
      setModal({
        active: false,
      })
    }
  }

  return (
    <>
      <h1 className="text-xl font-bold">Eliminar producto</h1>

      {products && (
        <>
          {products.map((product) => (
            <div key={product.id} className="bg-green-200 p-4 m-4">
              <p>ID del producto: {product.id}</p>
              <p>Tipo de Producto: {product.tiposProducto}</p>
              <p>Transporte: {product.transporte}</p>
              <button
                className="bg-red-400 p-2 mt-2 rounded-md"
                onClick={() => {
                  handleDelete(product.id)
                }}
              >
                Eliminar
              </button>
            </div>
          ))}
        </>
      )}
    </>
  )
}
export default DeleteProductModal
