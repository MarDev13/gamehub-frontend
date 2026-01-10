import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"

import Pagination from "./Pagination"
import GameStatusBadge from "./GameStatusBadge"
import DiscountBadge from "./DiscountBadge"
import GenreBadge from "./GenreBadge"
import TagBadge from "./TagBadge"
import { useGames } from "../hooks/useGames"
import { togglePublishGame } from "../api/adminGamesApi"

type Tag = {
    id: string
    name: string
}

export default function GamesTable() {
    const {
        games,
        loading,
        page,
        totalPages,
        setPage,
        refresh
    } = useGames()

    const navigate = useNavigate()
    const handleTogglePublish = async (id: string) => {
        try {
            await togglePublishGame(id)
            refresh()
        } catch (error) {
            console.error(error)
            alert("Error al cambiar el estado del juego")
        }
    }

    if (loading) return <p>Cargando juegos...</p>

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Título</TableHead>

                        <TableHead className="hidden md:table-cell">
                            Género
                        </TableHead>
                        <TableHead className="hidden lg:table-cell">
                            Plataformas
                        </TableHead>
                        <TableHead className="hidden lg:table-cell">
                            Etiquetas
                        </TableHead>



                        <TableHead className="hidden md:table-cell">
                            Precio
                        </TableHead>

                        <TableHead className="hidden md:table-cell">
                            Stock
                        </TableHead>

                        <TableHead>Estado</TableHead>

                        <TableHead className="hidden md:table-cell">
                            Oferta
                        </TableHead>

                        <TableHead className="text-right">
                            Acciones
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {games.map((game) => (
                        <TableRow key={game.id}>
                            {/* TÍTULO */}
                            <TableCell className="font-medium">
                                {game.title}
                            </TableCell>

                            {/* GÉNERO */}
                            <TableCell className="hidden md:table-cell">
                                {game.genre ? (
                                    <GenreBadge name={game.genre.name} />
                                ) : (
                                    <span className="text-muted-foreground">—</span>
                                )}
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                                <div className="flex flex-wrap gap-1">
                                    {game.platforms.length === 0 && (
                                        <span className="text-muted-foreground text-sm">—</span>
                                    )}

                                    {game.platforms.map((platform: any) => (
                                        <span
                                            key={platform.id}
                                            className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                                        >
                                            {platform.name}
                                        </span>
                                    ))}
                                </div>
                            </TableCell>

                            {/* ETIQUETAS */}
                            <TableCell className="hidden lg:table-cell">
                                <div className="flex flex-wrap gap-1">
                                    {game.tags.length === 0 && (
                                        <span className="text-muted-foreground text-sm">
                                            —
                                        </span>
                                    )}

                                    {game.tags.map((tag: Tag) => (
                                        <TagBadge key={tag.id} name={tag.name} />
                                    ))}
                                </div>
                            </TableCell>


                            {/* PRECIO */}
                            <TableCell className="hidden md:table-cell">
                                {!game.onSale && (
                                    <span>{game.price.toFixed(2)} €</span>
                                )}

                                {game.onSale && (
                                    <div className="flex flex-col">
                                        <span className="text-sm line-through text-muted-foreground">
                                            {game.price.toFixed(2)} €
                                        </span>
                                        <span className="font-semibold text-green-600">
                                            {game.salePrice?.toFixed(2)} €
                                        </span>
                                    </div>
                                )}
                            </TableCell>

                            {/* STOCK */}
                            <TableCell className="hidden md:table-cell">
                                {game.stock}
                            </TableCell>

                            {/* ESTADO */}
                            <TableCell>
                                <GameStatusBadge published={game.isPublished} />
                            </TableCell>

                            {/* OFERTA */}
                            <TableCell className="hidden md:table-cell">
                                {game.onSale ? (
                                    <DiscountBadge discountPct={game.discountPct} />
                                ) : (
                                    <span className="text-muted-foreground">—</span>
                                )}
                            </TableCell>

                            {/* ACCIONES */}
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem
                                            onClick={() =>
                                                navigate(`/admin/games/${game.id}/edit`)
                                            }
                                        >
                                            Editar
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            onClick={() => handleTogglePublish(game.id)}
                                        >
                                            {game.isPublished ? "Ocultar" : "Publicar"}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </>
    )
}
