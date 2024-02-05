import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../api/auth'
import { useAuthStore } from '../../store/auth'

const RegisterPage = () => {
  const navigate = useNavigate()
  const setToken = useAuthStore((state) => state.setToken)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await register(
        formData.name,
        formData.username,
        formData.password,
        formData.email
      )

      setToken(response.data.token)
      navigate('/')
    } catch (err) {
      console.error(err)
    }

    setFormData({
      name: '',
      email: '',
      username: '',
      password: '',
    })
  }

  return (
    <div className="text-center m-auto">
      <h1 className="text-xl font-bold">Register</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-start">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          className="border-2 border-gray-300 p-1 rounded-md"
          required
          onChange={handleChange}
        />

        <label htmlFor="email" className="text-start">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          className="border-2 border-gray-300 p-1 rounded-md"
          onChange={handleChange}
          required
        />

        <label htmlFor="username" className="text-start">
          Usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          className="border-2 border-gray-300 p-1 rounded-md"
          required
          onChange={handleChange}
        />

        <label htmlFor="password" className="text-start">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          className="border-2 border-gray-300 p-1 rounded-md"
          required
          onChange={handleChange}
        />

        <div className="flex justify-between pt-4">
          <input
            type="submit"
            value="Submit"
            className="bg-green-200 p-2 cursor-pointer"
          />
          <input
            type="button"
            value="Login"
            className="bg-gray-300 p-2 cursor-pointer"
            onClick={() => {
              navigate('/login')
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
