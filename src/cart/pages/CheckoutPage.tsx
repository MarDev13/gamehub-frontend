import { useCart } from "@/cart/context/CartContext";
import { createOrder } from "@/api/orderApi";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function CheckoutPage() {
  const { items } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isSubmitting = useRef(false);

  const total = Number(
    items.reduce(
      (sum, item) =>
        sum + (item.salePrice ?? item.price) * item.quantity,
      0
    ).toFixed(2)
  );

  const handleBuy = async () => {
    if (isSubmitting.current || items.length === 0) return;

    isSubmitting.current = true;
    setLoading(true);

    try {
      await createOrder(total);
      navigate("/shop/order-success");
    } catch (error) {
      console.error(error);
      isSubmitting.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Finalizar compra</h1>

      {items.map(item => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>
            {item.title} x{item.quantity}
          </span>
          <span>
            {((item.salePrice ?? item.price) * item.quantity).toFixed(2)} €
          </span>
        </div>
      ))}

      <div className="text-right text-xl font-bold">
        Total: {total.toFixed(2)} €
      </div>

      <button
        onClick={handleBuy}
        disabled={loading || items.length === 0}
        className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Procesando..." : "Comprar"}
      </button>
    </div>
  );
}



