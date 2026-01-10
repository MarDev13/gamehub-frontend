"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Actividad de usuarios en la tienda"

const chartData = [
  { date: "2025-10-08", web: 222, app: 150 },
  { date: "2025-10-09", web: 97, app: 180 },
  { date: "2025-10-10", web: 167, app: 120 },
  { date: "2025-10-11", web: 242, app: 260 },
  { date: "2025-10-12", web: 373, app: 290 },
  { date: "2025-10-13", web: 301, app: 340 },
  { date: "2025-10-14", web: 245, app: 180 },
  { date: "2025-10-15", web: 409, app: 320 },
  { date: "2025-10-16", web: 59, app: 110 },
  { date: "2025-10-17", web: 261, app: 190 },
  { date: "2025-10-18", web: 327, app: 350 },
  { date: "2025-10-19", web: 292, app: 210 },
  { date: "2025-10-20", web: 342, app: 380 },
  { date: "2025-10-21", web: 137, app: 220 },
  { date: "2025-10-22", web: 120, app: 170 },
  { date: "2025-10-23", web: 138, app: 190 },
  { date: "2025-10-24", web: 446, app: 360 },
  { date: "2025-10-25", web: 364, app: 410 },
  { date: "2025-10-26", web: 243, app: 180 },
  { date: "2025-10-27", web: 89, app: 150 },
  { date: "2025-10-28", web: 137, app: 200 },
  { date: "2025-10-29", web: 224, app: 170 },
  { date: "2025-10-30", web: 138, app: 230 },
  { date: "2025-10-31", web: 387, app: 290 },
  { date: "2025-11-01", web: 215, app: 250 },
  { date: "2025-11-02", web: 75, app: 130 },
  { date: "2025-11-03", web: 383, app: 420 },
  { date: "2025-11-04", web: 122, app: 180 },
  { date: "2025-11-05", web: 315, app: 240 },
  { date: "2025-11-06", web: 454, app: 380 },
  { date: "2025-11-07", web: 165, app: 220 },
  { date: "2025-11-08", web: 293, app: 310 },
  { date: "2025-11-09", web: 247, app: 190 },
  { date: "2025-11-10", web: 385, app: 420 },
  { date: "2025-11-11", web: 481, app: 390 },
  { date: "2025-11-12", web: 498, app: 520 },
  { date: "2025-11-13", web: 388, app: 300 },
  { date: "2025-11-14", web: 149, app: 210 },
  { date: "2025-11-15", web: 227, app: 180 },
  { date: "2025-11-16", web: 293, app: 330 },
  { date: "2025-11-17", web: 335, app: 270 },
  { date: "2025-11-18", web: 197, app: 240 },
  { date: "2025-11-19", web: 197, app: 160 },
  { date: "2025-11-20", web: 448, app: 490 },
  { date: "2025-11-21", web: 473, app: 380 },
  { date: "2025-11-22", web: 338, app: 400 },
  { date: "2025-11-23", web: 499, app: 420 },
  { date: "2025-11-24", web: 315, app: 350 },
  { date: "2025-11-25", web: 235, app: 180 },
  { date: "2025-11-26", web: 177, app: 230 },
  { date: "2025-11-27", web: 82, app: 140 },
  { date: "2025-11-28", web: 81, app: 120 },
  { date: "2025-11-29", web: 252, app: 290 },
  { date: "2025-11-30", web: 294, app: 220 },
  { date: "2025-12-01", web: 201, app: 250 },
  { date: "2025-12-02", web: 213, app: 170 },
  { date: "2025-12-03", web: 420, app: 460 },
  { date: "2025-12-04", web: 233, app: 190 },
  { date: "2025-12-05", web: 78, app: 130 },
  { date: "2025-12-06", web: 340, app: 280 },
  { date: "2025-12-07", web: 178, app: 230 },
  { date: "2025-12-08", web: 178, app: 200 },
  { date: "2025-12-09", web: 470, app: 410 },
  { date: "2025-12-10", web: 103, app: 160 },
  { date: "2025-12-11", web: 439, app: 380 },
  { date: "2025-12-12", web: 88, app: 140 },
  { date: "2025-12-13", web: 294, app: 250 },
  { date: "2025-12-14", web: 323, app: 370 },
  { date: "2025-12-15", web: 385, app: 320 },
  { date: "2025-12-16", web: 438, app: 480 },
  { date: "2025-12-17", web: 155, app: 200 },
  { date: "2025-12-18", web: 92, app: 150 },
  { date: "2025-12-19", web: 492, app: 420 },
  { date: "2025-12-20", web: 81, app: 130 },
  { date: "2025-12-21", web: 426, app: 380 },
  { date: "2025-12-22", web: 307, app: 350 },
  { date: "2025-12-23", web: 371, app: 310 },
  { date: "2025-12-24", web: 475, app: 520 },
  { date: "2025-12-25", web: 107, app: 170 },
  { date: "2025-12-26", web: 341, app: 290 },
  { date: "2025-12-27", web: 408, app: 450 },
  { date: "2025-12-28", web: 169, app: 210 },
  { date: "2025-12-29", web: 317, app: 270 },
  { date: "2025-12-30", web: 480, app: 530 },
  { date: "2025-12-31", web: 132, app: 180 },
  { date: "2026-01-01", web: 141, app: 190 },
  { date: "2026-01-02", web: 434, app: 380 },
  { date: "2026-01-03", web: 448, app: 490 },
  { date: "2026-01-04", web: 149, app: 200 },
  { date: "2026-01-05", web: 103, app: 160 },
  { date: "2026-01-06", web: 446, app: 400 },
]

const chartConfig = {
  web: {
    label: "Web",
    color: "var(--chart-1)",
  },
  app: {
    label: "App",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function ChartBoard() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2026-01-06")
    let daysToSubtract = 90

    if (timeRange === "30d") daysToSubtract = 30
    if (timeRange === "7d") daysToSubtract = 7

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Actividad de la tienda</CardTitle>
          <CardDescription>
            Usuarios activos en GameHub
          </CardDescription>
        </div>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="hidden w-[160px] sm:flex">
            <SelectValue placeholder="Últimos 3 meses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="90d">Últimos 3 meses</SelectItem>
            <SelectItem value="30d">Últimos 30 días</SelectItem>
            <SelectItem value="7d">Últimos 7 días</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="app"
              type="natural"
              fill="var(--color-app)"
              stroke="var(--color-app)"
              stackId="a"
            />
            <Area
              dataKey="web"
              type="natural"
              fill="var(--color-web)"
              stroke="var(--color-web)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
