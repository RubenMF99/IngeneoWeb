import { useEffect, useState } from 'react'
import { Product } from '../../types/types'
import { getProducts } from '../../api/product'

const ViewProductModal = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProducts().then((response) => {
          setProducts(response.data)
        })
      } catch (err) {
        console.error(err)
      }
    }

    fetchProducts()
  }, [])
  return (
    <>
      <h1>Tus productos</h1>
      {products.map((product) => (
        <div key={product.id} className="bg-green-200 p-4 m-4">
          <p>ID del producto: {product.id}</p>
          <p>Tipo de Producto: {product.tiposProducto}</p>
          <p>Transporte: {product.transporte}</p>
        </div>
      ))}
    </>
  )
}
export default ViewProductModal
