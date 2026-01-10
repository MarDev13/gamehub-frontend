import GameForm from "../components/GameForm"

export default function CreateGamePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold mb-6 mt-6  text-center">
        Crear nuevo juego
      </h1>

      <GameForm mode="create" />
    </div>
  )
}