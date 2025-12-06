import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
export const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(query);
    }
  };
  const onSearch = () => {
    console.log(query);
  };
  return (
    <div className="border border-[#D7D7D7] flex items-center px-4 rounded-3xl">
      <Search onClick={() => onSearch()} className="hover:cursor-pointer" />
      <Input
        type="text"
        placeholder="What are you looking for ?"
        className="w-150 focus-visible:ring-offset-0 focus-visible:ring-0 outline-0 border-0 shadow-none"
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
