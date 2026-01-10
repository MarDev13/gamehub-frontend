import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../auth/pages/Login";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import { ProtectedRoute } from "../auth/components/ProtectedRoute";
import { UserLayout } from "../user/layout/UserLayout";
import { Profile } from "../user/pages/Profile";
import { RegisterPage } from "../auth/pages/Register";
import UsersPage from "@/admin/pages/UsersPage";
import UserOrdersPage from "@/admin/pages/UserOrdersPage";
import GamesPage from "../admin/pages/GamesPage";
import EditGamePage from "../admin/pages/EditGamePage"
import CreateGamePage from "@/admin/pages/CreateGamePage";
import GenresPage from "@/admin/pages/GenresPage";
import CreateGenrePage from "@/admin/pages/CreateGenrePage";
import EditGenrePage from "@/admin/pages/EditGenrePage";
import TagsPage from "@/admin/pages/TagsPage";
import EditTagPage from "@/admin/pages/EditTagPage";
import CreateTagPage from "@/admin/pages/CreateTagPage";
import PlatformsPage from "@/admin/pages/PlatformsPage";
import CreatePlatformPage from "@/admin/pages/CreatePlatformPage";
import EditPlatformPage from "@/admin/pages/EditPlatformPage";
import ProfilePage from "@/admin/pages/ProfilePage";
import EditProfilePage from "@/admin/pages/EditProfilePage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="/admin/users/:id/orders" element={<UserOrdersPage />} />
                    <Route path="games" element={<GamesPage />} />
                    <Route path="games/:id/edit" element={<EditGamePage />} />
                    <Route path="/admin/games/new" element={<CreateGamePage />} />
                    <Route path="genres" element={<GenresPage />} />
                    <Route path="genres/new" element={<CreateGenrePage />} />
                    <Route path="genres/:id/edit" element={<EditGenrePage />} />
                    <Route path="/admin/tags" element={<TagsPage />} />
                    <Route path="/admin/tags/new" element={<CreateTagPage />} />
                    <Route path="/admin/tags/:id/edit" element={<EditTagPage />} />
                    <Route path="/admin/platforms" element={<PlatformsPage />} />
                    <Route path="/admin/platforms/new" element={<CreatePlatformPage />} />
                    <Route path="/admin/platforms/:id/edit" element={<EditPlatformPage />} />
                    <Route path="/admin/profile" element={<ProfilePage />} />
                    <Route path="/admin/profile/edit" element={<EditProfilePage />} />
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