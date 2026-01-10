import UsersTable from "../components/UsersTable";


export default function UsersPage() {
  return (
    <div className="space-y-6">
     <div className="mb-8">
  <h1 className="text-2xl font-semibold">Usuarios</h1>
  <p className="text-sm text-muted-foreground">
    Gestión de usuarios registrados en la plataforma
  </p>
</div>

      <div className="px-6 lg:px-12 xl:px-16 rounded-lg border bg-secondary shadow-sm py-4">
  <UsersTable />
</div>

    </div>
  )
}
