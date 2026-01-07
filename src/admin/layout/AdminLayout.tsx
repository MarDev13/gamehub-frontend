import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside style={{ width: 220, padding: 16, borderRight: "1px solid #ddd" }}>
                <h2>Admin</h2>
                <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <Link to="/admin">Dashboard</Link>
                    <Link to="/login">Logout</Link>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: 16}}>
                <Outlet/>
            </main>
        </div>
    );
}