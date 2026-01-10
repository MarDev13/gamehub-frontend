import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

type MetricCardProps = {
  title: string
  value: number | string
  description?: string
  icon: LucideIcon
}

export default function MetricCard({
  title,
  value,
  description,
  icon: Icon,
}: MetricCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 py-6">
        {/* Icono */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>

        {/* Texto */}
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
