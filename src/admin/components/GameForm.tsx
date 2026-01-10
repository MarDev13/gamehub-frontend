import { useState } from "react"
import { createGame, updateGame } from "../api/adminGamesApi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from "react-router-dom"
import { useGenres } from "../hooks/useGenres"
import { useTags } from "../hooks/useTags"
import { usePlatforms } from "../hooks/usePlatforms"

type Props = {
  mode: "create" | "edit"
  game?: any
}

export default function GameForm({ mode, game }: Props) {
  const navigate = useNavigate()
  const { genres } = useGenres()
  const { tags } = useTags()
  const { platforms } = usePlatforms()

  const [title, setTitle] = useState(game?.title ?? "")
  const [price, setPrice] = useState(game?.price ?? 0)
  const [stock, setStock] = useState(game?.stock ?? 0)

  const [onSale, setOnSale] = useState(Boolean(game?.discountPct))
  const [discountPct, setDiscountPct] = useState<number | null>(
    game?.discountPct ?? null
  )

  const [genreName, setGenreName] = useState(game?.genre?.name ?? "")
  const [tagNames, setTagNames] = useState<string[]>(
    game?.tags?.map((t: any) => t.name) ?? []
  )
  const [platformNames, setPlatformNames] = useState<string[]>(
    game?.platforms?.map((p: any) => p.name) ?? []
  )

  const [loading, setLoading] = useState(false)

  const toggle = (value: string, setter: any) => {
    setter((prev: string[]) =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      title,
      price: Number(price),
      stock: Number(stock),
      discountPct: onSale ? discountPct : null,
      genreName,
      tagNames,
      platformNames,
    }

    try {
      if (mode === "create") {
        await createGame(payload)
      } else {
        await updateGame(game.id, payload)
      }

      navigate("/admin/games")
    } catch (err) {
      console.error(err)
      alert("Error al guardar el juego")
    } finally {
      setLoading(false)
    }
  }

  const salePrice =
    onSale && discountPct
      ? (price - price * (discountPct / 100)).toFixed(2)
      : null

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div>
        <Label>Título</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </div>

      <div>
        <Label>Precio base (€)</Label>
        <Input type="number" value={price} onChange={e => setPrice(+e.target.value)} />
      </div>

      <div>
        <Label>Stock</Label>
        <Input type="number" value={stock} onChange={e => setStock(+e.target.value)} />
      </div>

      <div>
        <Label>Género</Label>
        <select
          className="w-full rounded-md border px-3 py-2"
          value={genreName}
          onChange={e => setGenreName(e.target.value)}
        >
          <option value="">Selecciona género</option>
          {genres.map(g => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>
      </div>

      <div>
        <Label>Plataformas</Label>
        <div className="grid grid-cols-2 gap-2">
          {platforms.map(p => (
            <label key={p.id} className="flex items-center gap-2">
              <Checkbox
                checked={platformNames.includes(p.name)}
                onCheckedChange={() => toggle(p.name, setPlatformNames)}
              />
              {p.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label>Etiquetas</Label>
        <div className="grid grid-cols-2 gap-2">
          {tags.map(t => (
            <label key={t.id} className="flex items-center gap-2">
              <Checkbox
                checked={tagNames.includes(t.name)}
                onCheckedChange={() => toggle(t.name, setTagNames)}
              />
              {t.name}
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          checked={onSale}
          onCheckedChange={(v) => {
            setOnSale(Boolean(v))
            if (!v) setDiscountPct(null)
          }}
        />
        <Label>Juego en oferta</Label>
      </div>

      {onSale && (
        <div className="rounded-md border p-4 bg-muted space-y-2">
          <Label>Descuento (%)</Label>
          <Input
            type="number"
            value={discountPct ?? ""}
            onChange={e => setDiscountPct(+e.target.value)}
          />
          {salePrice && (
            <p className="text-sm text-muted-foreground">
              Precio final: <strong>{salePrice} €</strong>
            </p>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <Button type="submit" disabled={loading}>
          {mode === "create" ? "Crear juego" : "Guardar cambios"}
        </Button>
        <Button variant="outline" onClick={() => navigate("/admin/games")}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}





