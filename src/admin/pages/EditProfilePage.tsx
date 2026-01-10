import { useMe } from "../hooks/useMe"
import EditProfileForm from "../components/EditProfileForm"

export default function EditProfilePage() {
  const { user, loading } = useMe()

  if (loading) return <p>Cargando perfil...</p>
  if (!user) return <p>No se pudo cargar el perfil</p>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-center mt-10">Editar perfil</h1>
      <EditProfileForm user={user} />
    </div>
  )
}
