import { Gamepad2 } from "lucide-react"
import MetricCard from "./MetricCard"
import useGamesMetrics from "../hooks/useGamesMetrics"

export default function GamesMetricCard() {
  const { totalGames, loading } = useGamesMetrics()

  return (
    <MetricCard
      title="Videojuegos registrados"
      value={loading ? "—" : totalGames ?? 0}
      description="Total de videojuegos disponibles en la plataforma"
      icon={Gamepad2}
    />
  )
}