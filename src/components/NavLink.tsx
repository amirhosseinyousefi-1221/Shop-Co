import { Link } from "@tanstack/react-router";

export const NavLink = ({ title, ref }: { title: string; ref: string }) => {
  return (
    <Link to={ref} className="hover:text-red-600 text-xl font-bold">
      {title}
    </Link>
  );
};
