import { Users } from "lucide-react"
import MetricCard from "./MetricCard"
import useUsersMetrics from "../hooks/useUsersMetrics"

export default function UsersMetricCard() {
  const { totalUsers, loading } = useUsersMetrics()

  return (
    <MetricCard
      title="Usuarios registrados"
      value={loading ? "—" : totalUsers ?? "0"}
      description="Total de cuentas creadas en la plataforma"
      icon={Users}
    />
  )
}

