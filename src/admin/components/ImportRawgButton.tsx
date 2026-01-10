import { Button } from "@/components/ui/button";
import { importRawgGames } from "../api/adminGamesApi";
import { useState } from "react";
import { Loader2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ImportRawgButton() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleImport = async () => {
    try {
      setLoading(true);

      const res = await importRawgGames();

      toast({
        title: "Importación completada",
        description: res.message,
      });

    } catch (error: any) {
      toast({
        title: "Error al importar",
        description: error.message ?? "RAWG no disponible",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleImport}
      disabled={loading}
      className="flex items-center gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Importando juegos…
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Importar juegos RAWG
        </>
      )}
    </Button>
  );
}
