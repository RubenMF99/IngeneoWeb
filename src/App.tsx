import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import Clients from './pages/Storage'
import Shippings from './pages/Shippings'
import { useAuthStore } from './store/auth'
import Productos from './pages/Productos'

function App() {
  const isAllowed = useAuthStore((state) => state.isAuth)

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
            <Route index element={<HomePage />} />
            <Route path="/almacenes" element={<Clients />} />
            <Route path="/envios" element={<Shippings />} />
            <Route path="/productos" element={<Productos />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
