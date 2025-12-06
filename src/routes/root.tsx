import { createRootRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Nav />
      <Outlet />
    </div>
  ),
});
