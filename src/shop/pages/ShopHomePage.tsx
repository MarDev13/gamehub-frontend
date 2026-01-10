import { useEffect, useState } from "react";
import { getShopGames } from "@/api/shopApi";
import { GameCard } from "../components/GameCard";
import { Button } from "@/components/ui/button";

export default function ShopHomePage() {
  const [games, setGames] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadGames = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const data = await getShopGames(page, 12);

      setGames(prev => [...prev, ...data.items]);
      setHasMore(data.hasMore);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error("Error cargando juegos", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tienda retro & cozy</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {hasMore ? (
          <Button onClick={loadGames} disabled={loading}>
            {loading ? "Cargando..." : "Cargar más"}
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">
            No hay más juegos disponibles
          </p>
        )}
      </div>
    </div>
  );
}


