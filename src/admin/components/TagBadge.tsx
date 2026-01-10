type TagBadgeProps = {
  name: string
}

export default function TagBadge({ name }: TagBadgeProps) {
  return (
    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
      {name}
    </span>
  )
}