import { Outlet } from "react-router-dom";

export default function ProviderLayout() {
  return (
    <div>
      <aside>Provider Sidebar</aside>
      <Outlet />
    </div>
  );
}
