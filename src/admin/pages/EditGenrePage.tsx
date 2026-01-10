import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGenres, updateGenre } from "../api/adminGenresApi"
import GenreForm from "../components/GenreForm"

export default function EditGenrePage() {
  const { id } = useParams()
  const [name, setName] = useState("")

  useEffect(() => {
    getGenres({ page: 1, limit: 50 }).then(res => {
      const genre = res.items.find((g: any) => g.id === id)
      if (genre) setName(genre.name)
    })
  }, [id])

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Editar género</h1>
      <GenreForm
        initialName={name}
        onSubmit={(name) => updateGenre(id!, { name })}
      />
    </>
  )
}
