import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'
import { useAuthStore } from '../../store/auth'

const LoginPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const token = useAuthStore((state) => state.token)
  const setToken = useAuthStore((state) => state.setToken)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const resLogin = await login(user, password)

      setToken(resLogin.data.token)
      navigate('/')
    } catch (err: unknown) {
      console.error(err)
    }

    setUser('')
    setPassword('')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <div className="text-center m-auto">
      <h1 className="font-bold text-xl">Login</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-start">
          Usuario
        </label>
        <input
          required
          type="text"
          id="username"
          value={user}
          className="border-2 border-gray-300 p-1 rounded-md"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUser(e.target.value)
          }}
        />
        <label htmlFor="password" className="text-start">
          Contraseña
        </label>
        <input
          required
          className="border-2 border-gray-300 p-1 rounded-md"
          type="password"
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
        />
        <div className="flex justify-between pt-4">
          <input
            type="submit"
            value="Submit"
            className="bg-green-200 p-2 cursor-pointer"
          />
          <input
            type="button"
            value="Register"
            className="bg-gray-300 p-2 cursor-pointer"
            onClick={handleRegister}
          />
        </div>
      </form>
    </div>
  )
}
export default LoginPage
