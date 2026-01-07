import { Outlet } from "react-router-dom";

export function UserLayout() {
  return (
    <div>
  
      <h1>Área de usuario</h1>

    
      <Outlet />
    </div>
  );
}