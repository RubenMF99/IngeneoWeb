import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { ProtectedRouteProps } from '../types/types'
import { useEffect } from 'react'
import { useAuthStore } from '../store/auth'
import { getProfile } from '../api/auth'
import { AxiosError } from 'axios'

export const ProtectedRoute = ({
  children,
  isAllowed,
}: ProtectedRouteProps) => {
  const navigate = useNavigate()

  const setUserProfile = useAuthStore((state) => state.setProfile)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await getProfile()
        setUserProfile({
          _id: response.data._id,
        })
      } catch (err: unknown) {
        if (err instanceof AxiosError)
          if (err.response?.status === 401) {
            navigate('/login')
          }
        console.error(err)
      }
    }

    loadProfile()
  }, [navigate, setUserProfile])

  if (!isAllowed) return <Navigate to="/login" />

  return <>{children || <Outlet />}</>
}
