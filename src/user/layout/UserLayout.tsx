import { Outlet } from "react-router-dom";
import Header from "@/shop/components/Header";
import Footer from "@/shop/components/Footer";

export function UserLayout() {
  return (
     <div className="min-h-screen flex flex-col bg-[#f6edd3] text-[#4a3b1f]">
          <Header />
    
          <main className="flex-1 px-6 py-10 max-w-7xl mx-auto w-full">
            <Outlet />
          </main>
    
          <Footer />
        </div>
  );
}