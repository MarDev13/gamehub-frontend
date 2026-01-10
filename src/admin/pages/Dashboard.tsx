import ChartBoard from "../components/ChartBoard"
import AdminWelcomeCard from "../components/AdminWelcomeCard"
import { useAuth } from "../../auth/hooks/useAuth"
import AdminInfoCard from "../components/AdminInfoCard"
import UsersMetricCard from "../components/UsersMetricCard"
import GamesMetricCard from "../components/GamesMetricCard"

export default function Dashboard() {
    const { email } = useAuth()
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Bienvenido al Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2">
                <AdminWelcomeCard email={email ?? "admin"} />
                <AdminInfoCard />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <UsersMetricCard />
                <GamesMetricCard />
            </div>

            <ChartBoard />
        </div>
    )
}