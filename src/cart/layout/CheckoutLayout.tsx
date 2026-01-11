import ShopFooter from "@/shop/components/Footer";
import ShopHeader from "@/shop/components/Header";
import { Outlet } from "react-router-dom";


export default function ShopLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6edd3] text-[#4a3b1f]">
      <ShopHeader />

      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <ShopFooter />
    </div>
  )
}