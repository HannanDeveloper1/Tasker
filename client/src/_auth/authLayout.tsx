import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div id="auth">
      <Outlet />
    </div>
  );
}
