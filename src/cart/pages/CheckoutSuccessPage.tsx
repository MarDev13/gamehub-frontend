import { useCart } from "@/cart/context/CartContext";
import { useEffect, useMemo, useState } from "react";
import { CartItem } from "@/cart/context/CartContext";

export default function CheckoutSuccessPage() {
  const { items, clearCart } = useCart();
  const [ticketItems, setTicketItems] = useState<CartItem[]>([]);

  // Copiamos el carrito SOLO al montar la página
  useEffect(() => {
    if (items.length > 0) {
      setTicketItems(items);
      clearCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = useMemo(() => {
    return ticketItems.reduce(
      (sum, item) =>
        sum + (item.salePrice ?? item.price) * item.quantity,
      0
    );
  }, [ticketItems]);

  if (ticketItems.length === 0) {
    return (
      <div className="max-w-xl mx-auto bg-[#fff6dc] p-6 rounded-xl text-center">
        <h1 className="text-xl font-bold mb-2">🧾 Ticket no disponible</h1>
        <p className="text-sm text-muted-foreground">
          El ticket solo está disponible justo después de finalizar la compra.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-[#fff6dc] p-6 rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold text-center">
        🧾 Ticket de compra
      </h1>

      <div className="space-y-2 text-sm">
        {ticketItems.map(item => (
          <div
            key={item.id}
            className="flex justify-between border-b border-[#e2c98b] pb-1"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span className="font-medium">
              {(
                (item.salePrice ?? item.price) * item.quantity
              ).toFixed(2)} €
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-bold text-lg pt-2">
        <span>Total pagado</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      <p className="text-xs text-center text-muted-foreground pt-4">
        Compra simulada · Proyecto académico · GameHub · 2026
      </p>
    </div>
  );
}



