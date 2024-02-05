export type ProtectedRouteProps = {
  children?: React.ReactNode
  isAllowed: boolean
}

export type Storage = {
  id: number
  nombre: string
  tipo: string
  ubicacion: string
}

export type Shipping = {
  id: number
  name: string
  type: string
  location: string
}

export type Modal = {
  active: boolean
  modal?: string
}

export type Product = {
  id?: number
  idCliente?: number
  tiposProducto: string
  transporte: string
}

export type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<Modal>>
}

export type State = {
  token: string
  profile: Profile | null
  isAuth: boolean
}

export type Actions = {
  setToken: (token: string) => void
  setProfile: (profile: Profile) => void
  logout: () => void
}

export type Profile = {
  _id: number
}
