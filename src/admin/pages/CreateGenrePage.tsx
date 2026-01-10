import GenreForm from "../components/GenreForm"
import { createGenre } from "../api/adminGenresApi"

export default function CreateGenrePage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Crear género</h1>
      <GenreForm onSubmit={(name) => createGenre({ name })} />
    </>
  )
}
