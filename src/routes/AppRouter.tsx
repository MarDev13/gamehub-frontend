import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../auth/pages/Login";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import { ProtectedRoute } from "../auth/components/ProtectedRoute";
import { UserLayout } from "../user/layout/UserLayout";
import { Profile } from "../user/pages/Profile";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Route>
            <Route element={<ProtectedRoute requiredRole="USER" />}>
                <Route path="/account" element={<UserLayout />}>
                    <Route index element={<Profile />} />
                </Route>
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes >
    );
}