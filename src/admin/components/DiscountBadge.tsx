type OfferBadgeProps = {
  discountPct?: number | null
}

export default function DiscountGame({ discountPct }: OfferBadgeProps) {
  if (!discountPct || discountPct <= 0) {
    return null
  }

  return (
    <span
      className="
        inline-flex
        min-w-[56px]
        justify-center
        rounded-full
        bg-red-100
        px-3
        py-0.5
        text-xs
        font-semibold
        text-red-600
      "
    >
      -{discountPct}%
    </span>
  )
}

