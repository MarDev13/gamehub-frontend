import { Outlet } from "react-router-dom";
import ShopFooter from "../components/Footer";
import ShopHeader from "../components/Header";

export default function ShopLayout() {
  return (
    <div className="min-h-screen flex flex-col  text-[#4a3b1f]">
      <ShopHeader />

      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <ShopFooter />
    </div>
  )
}
