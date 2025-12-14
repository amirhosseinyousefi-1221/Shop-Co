import { Input } from "./ui/input";
import { CircleX, Search } from "lucide-react";
import { useFilters } from "./Filters/FiltersContext";

export const SearchBar = () => {
  const { filters, setFilters } = useFilters();

  const onSearch = () => {
    // filters.title is already persisted by FiltersProvider
    setFilters((prev) => ({ ...prev, title: filters.title }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="border border-[#D7D7D7] flex items-center px-4 rounded-3xl">
      <Search onClick={onSearch} className="hover:cursor-pointer" />
      <Input
        type="text"
        placeholder="What are you looking for ?"
        className="w-150 focus-visible:ring-offset-0 focus-visible:ring-0 outline-0 border-0 shadow-none"
        value={filters.title}
        onKeyDown={handleKeyDown}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <CircleX
        className="hover:cursor-pointer"
        onClick={() => setFilters((prev) => ({ ...prev, title: "" }))}
      />
    </div>
  );
};
