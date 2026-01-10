import { useParams } from "react-router-dom"
import { useUserOrders } from "../hooks/useUserOrders"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UserOrdersPage() {
  const { id } = useParams<{ id: string }>()
  const { orders, loading } = useUserOrders(id)

  if (loading) {
    return <p>Cargando pedidos...</p>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Pedidos del usuario</h1>

      {orders.length === 0 ? (
        <p className="text-muted-foreground">
          Este usuario no tiene pedidos registrados.
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-xs">
                  {order.id}
                </TableCell>

                <TableCell>
                  {order.total} €
                </TableCell>

                <TableCell>
                  {order.status}
                </TableCell>

                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
