import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <Button asChild>
        <Link to={"/login"}>Login</Link>
      </Button>
    </div>
  );
}
