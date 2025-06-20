import { logo } from "@/constants/images";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center flex-col min-h-dvh space-y-4 bg-accent p-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={logo} alt="Tasker" className="size-20" />
        <span className="font-semibold text-primary text-3xl">Tasker</span>
      </div>
      <div className="bg-white flex rounded-lg w-full max-w-xl shadow-sm">
        <Outlet />
      </div>
      <p className="text-center max-w-xl text-muted-foreground">
        By continue, you will accept all our{" "}
        <a href="#" className="link">
          Terms and Conditions
        </a>{" "}
        &{" "}
        <a href="#" className="link">
          License Agreements
        </a>
      </p>
    </div>
  );
}
