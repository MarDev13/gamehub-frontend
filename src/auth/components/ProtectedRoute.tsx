import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoute({ requiredRole }: { requiredRole?: 'ADMIN' | 'USER' }) {

    const { token, isAuthenticated, role, isLoading } = useAuth();
    if(isLoading){
        return <div>Loading...</div>;
    }

    if (!token || !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
