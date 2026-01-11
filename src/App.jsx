import AppRouter from "./routes/AppRouter";

import { Toaster } from "@/components/ui/toaster";

import CartDrawer from "./cart/components/CartDrawer";


export default function App() {
  return (
    <>
    
      <AppRouter />
      <CartDrawer />
      <Toaster />
    </>
  
);
}
