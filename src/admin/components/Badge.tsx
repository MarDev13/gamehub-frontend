import { Badge } from "@/components/ui/badge"

function RoleBadge({ role }: { role: string }) {
  const baseClasses =
    "w-20 justify-center text-center flex"

  switch (role) {
    case "ADMIN":
      return (
        <Badge
          variant="default"
          className={baseClasses}
        >
          ADMIN
        </Badge>
      )

    case "USER":
      return (
        <Badge
          variant="outline"
          className={baseClasses}
        >
          USER
        </Badge>
      )

    default:
      return (
        <Badge className={baseClasses}>
          {role}
        </Badge>
      )
  }
}
export default RoleBadge