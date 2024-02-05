import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

const HomePage = () => {
  const logout = useAuthStore((state) => state.logout)

  return (
    <>
      <div className="m-auto text-center">
        <h1 className="text-xl font-bold text-center">Sistema de gestion</h1>
        <div className="flex flex-col">
          <Link to="/almacenes">
            <button className="bg-gray-200 p-2 m-2 rounded-md w-full">
              Gestionar tus Almacenes
            </button>
          </Link>
          <Link to="/envios">
            <button className="bg-gray-200 p-2 m-2 rounded-md w-full">
              Gestionar Logistica
            </button>
          </Link>
          <Link to="/productos">
            <button className="bg-gray-200 p-2 m-2 rounded-md w-full">
              Gestionar tus productos
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={logout}
        className="fixed bottom-0 left-0 p-2 m-2 bg-red-700 rounded-md"
      >
        <Link to="/login">Salir</Link>
      </button>
    </>
  )
}

export default HomePage
