import { Badge } from "@/components/ui/badge"

export default function GameStatusBadge({ published }: { published: boolean }) {
  return (
    <Badge
      className="w-[90px] justify-center"
      variant={published ? "default" : "outline"}
    >
      {published ? "Publicado" : "Oculto"}
    </Badge>
  )
}