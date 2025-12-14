import clsx from "clsx";
import { CircleX } from "lucide-react";
import { useFilters } from "./FiltersContext";


function RemoveFilter() {
  const { filters, setFilters } = useFilters();
  return (
    <CircleX
      className={clsx(
        "mt-4 hover:cursor-pointer",
        filters.category ? "block" : "hidden"
      )}
      onClick={() =>
        setFilters((prev) => ({
          ...prev,
          category: "",
        }))
      }
      strokeWidth={1.5}
      color="red"
      size={30}
    />
  );
}

export default RemoveFilter;
