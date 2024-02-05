import { useState, useEffect } from 'react'
import { Shipping } from '../../types/types'

const ViewShippingModal = () => {
  const [shippings, setShippings] = useState<Shipping[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setShippings([
          {
            id: 1,
            name: 'Envio 1',
            type: 'Tipo 1',
            location: 'Ubicacion 1',
          },
          {
            id: 2,
            name: 'Envio 2',
            type: 'Tipo 2',
            location: 'Ubicacion 2',
          },
          {
            id: 3,
            name: 'Envio 3',
            type: 'Tipo 3',
            location: 'Ubicacion 3',
          },
          {
            id: 4,
            name: 'Envio 4',
            type: 'Tipo 4',
            location: 'Ubicacion 4',
          },
          {
            id: 5,
            name: 'Envio 5',
            type: 'Tipo 5',
            location: 'Ubicacion 5',
          },
          {
            id: 6,
            name: 'Envio 6 ',
            type: 'Tipo 6',
            location: 'Ubicacion 6',
          },
        ])
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Tus envios</h1>
      {shippings.map((shipping: Shipping) => (
        <div key={shipping.id} className="bg-green-200 p-4 m-4 ">
          <h2>{shipping.name}</h2>
          <p>{shipping.type}</p>
          <p>{shipping.location}</p>
        </div>
      ))}
    </>
  )
}
export default ViewShippingModal
