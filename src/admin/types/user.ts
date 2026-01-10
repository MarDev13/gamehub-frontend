export type Role = {
  id: string
  name: "ADMIN" | "USER"
}

export type User = {
  id: string
  name:string
  nameUser: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
  role: Role
}
