export const NavLink = ({ title, ref }: { title: string; ref: string }) => {
  return (
    <a href={ref} className="hover:text-red-600 text-xl font-bold">
      {title}
    </a>
  );
};
