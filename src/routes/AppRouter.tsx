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
import ShopHomePage from "@/shop/pages/ShopHomePage";
import ShopLayout from "@/shop/layout/ShopLayout";
import GameDetailPage from "@/shop/pages/GameDetailPage";
import CheckoutPage from "@/cart/pages/CheckoutPage";
import CheckoutSuccessPage from "@/cart/pages/CheckoutSuccessPage";
import MyOrdersPage from "@/user/pages/MyOrdersPage";

export default function AppRouter() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* ADMIN */}
      <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id/orders" element={<UserOrdersPage />} />

          <Route path="games" element={<GamesPage />} />
          <Route path="games/new" element={<CreateGamePage />} />
          <Route path="games/:id/edit" element={<EditGamePage />} />

          <Route path="genres" element={<GenresPage />} />
          <Route path="genres/new" element={<CreateGenrePage />} />
          <Route path="genres/:id/edit" element={<EditGenrePage />} />

          <Route path="tags" element={<TagsPage />} />
          <Route path="tags/new" element={<CreateTagPage />} />
          <Route path="tags/:id/edit" element={<EditTagPage />} />

          <Route path="platforms" element={<PlatformsPage />} />
          <Route path="platforms/new" element={<CreatePlatformPage />} />
          <Route path="platforms/:id/edit" element={<EditPlatformPage />} />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/edit" element={<EditProfilePage />} />
        </Route>
      </Route>

     
      <Route element={<ProtectedRoute requiredRole="USER" />}>
        <Route path="/account" element={<UserLayout />}>
          <Route index element={<Profile />} />
          <Route path="orders" element={<MyOrdersPage />} />
        </Route>
      </Route>

     
      <Route path="/shop" element={<ShopLayout />}>
        <Route index element={<ShopHomePage />} />
        <Route path="games/:id" element={<GameDetailPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<CheckoutSuccessPage />} />
      </Route>

     
      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  )
}
