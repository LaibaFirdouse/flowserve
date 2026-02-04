import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <header>App Header</header>
      <Outlet />
    </div>
  );
}
