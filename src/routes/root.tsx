import { createRootRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "@/components/Footer";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  ),
});
